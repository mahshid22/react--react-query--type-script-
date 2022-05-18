import React, { FC } from "react";
import { useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { getEpisode } from "../../hooks/episode";
import useEpisodes from "../../hooks/episodes";
import styles from "./Episodes.module.css";

interface EpisodesProps {}

const Episodes = () => {
  const { data: episodes, status } = useEpisodes();
  const queryClient = useQueryClient();

  if (status !== "success")
    return <div className={styles.Characters}>is Loading ..</div>;
  return (
    <div className={styles.Episodes}>
      <h2>Episodes :</h2>
      {episodes.results.map((episode, index) => {
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
    </div>
  );
};

export default Episodes;
