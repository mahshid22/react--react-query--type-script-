import React, { FC } from "react";
import useCharacter from "../../hooks/character";
import styles from "./Character.module.css";

interface CharacterProps {}

const Character: FC<CharacterProps> = () => {
  const characterId = null;
  const { status, data, error, isFetching } = useCharacter(characterId);
  return <div className={styles.Character}>Character Component</div>;
};

export default Character;
