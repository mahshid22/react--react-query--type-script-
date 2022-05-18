import axios from "axios";
import React, { FC } from "react";
import { useInfiniteQuery, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { getEpisode } from "../../hooks/episode";
import useEpisodes from "../../hooks/episodes";
import styles from "./Episodes.module.css";
import { useInView } from "react-intersection-observer";
import { episodeType, IEpisodesResponce } from "../../types/episode";
import useEpisodesInfiniteQuery from "../../hooks/episodesInfiniteQuery";

interface EpisodesProps {}

const Episodes = () => {
  const { ref, inView } = useInView();

  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
  } = useEpisodesInfiniteQuery();

  React.useEffect(() => {
    if (inView) {
      console.log(22);

      fetchNextPage();
    }
  }, [inView]);

  if (status !== "success")
    return <div className={styles.Characters}>is Loading ..</div>;
  console.log(data);
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
                    <p>
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
