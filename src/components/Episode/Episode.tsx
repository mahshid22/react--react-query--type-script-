import React, { FC } from "react";
import useEpisode from "../../hooks/episode";
import styles from "./Episode.module.css";

interface EpisodeProps {}

const Episode: FC<EpisodeProps> = () => {
  const episodeId = null;
  const { status, data, error, isFetching } = useEpisode(episodeId);

  return <div className={styles.Episode}>Episode Component</div>;
};

export default Episode;
