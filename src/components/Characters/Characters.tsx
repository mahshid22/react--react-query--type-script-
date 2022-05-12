import React, { FC } from "react";
import useCharacters from "../../hooks/characters";
import styles from "./Characters.module.css";

interface CharactersProps {}

const Characters: FC<CharactersProps> = () => {
  const { data, status } = useCharacters();

  return <div className={styles.Characters}>Characters Component</div>;
};

export default Characters;
