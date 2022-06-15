import React from "react";
import { Link } from "react-router-dom";
import styles from "./Episodes.module.css";
import { useInView } from "react-intersection-observer";
import { episodeType } from "../../types/episode";
import useEpisodesInfiniteQuery from "../../hooks/episodesInfiniteQuery";
import { useQueryClient } from "react-query";
import { getEpisode } from "../../hooks/episode";

const Episodes = () => {
  const queryClient = useQueryClient();
  const { ref, inView } = useInView();
  const { status, data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useEpisodesInfiniteQuery();

  React.useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (status !== "success")
    return <div className={styles.Characters}>is Loading ..</div>;

  return (
    <div className={styles.Episodes}>
      <>
        <h2>Episodes :</h2>
        {data.pages.map((page, index) => {
          return (
            <React.Fragment
              key={page.info.next ? page.info.next : page.info.prev}
            >
              {page.results.map((episode: episodeType) => {
                return (
                  <Link to={`/episodes/${episode.id}`}>
                    <p
                      onMouseEnter={async () => {
                        await queryClient.prefetchQuery(
                          `episode-${episode.id}`,
                          () => getEpisode(Number(episode.id)),
                          {
                            staleTime: 70 * 1000 /* 70 second */,
                          }
                        );
                      }}
                    >
                      {episode.episode} - {episode.name}
                    </p>
                  </Link>
                );
              })}
            </React.Fragment>
          );
        })}
        <button
          ref={ref}
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load Newer"
            : "Nothing more to load"}
        </button>
      </>
    </div>
  );
};

export default Episodes;
