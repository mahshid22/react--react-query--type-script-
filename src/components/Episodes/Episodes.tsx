import React, { FC } from "react";
import { useQueryClient } from "react-query";
import useEpisodes from "../../hooks/episodes";
import styles from "./Episodes.module.css";

interface EpisodesProps {}

const Episodes = () => {
  const { data, status } = useEpisodes();

  return <div className={styles.Episodes}>Episodes Component</div>;
};

export default Episodes;
