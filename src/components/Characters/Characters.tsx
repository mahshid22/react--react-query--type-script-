import React, { FC } from "react";
import { useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { getCharacter } from "../../hooks/character";
import useCharacters from "../../hooks/characters";
import styles from "./Characters.module.css";

interface CharactersProps {}

const Characters: FC<CharactersProps> = () => {
  const queryClient = useQueryClient();
  const { data: Characters, status } = useCharacters();

  if (status !== "success")
    return <div className={styles.Characters}>is Loading ..</div>;
  return (
    <div className={styles.Characters}>
      <h2>Character :</h2>
      {Characters.results.map((Character, index) => {
        return (
          <Link to={`/characters/${Character.url?.split("/")?.[5]}`}>
            <p
              onMouseEnter={async () => {
                await queryClient.prefetchQuery(
                  `character-${Character.url?.split("/")?.[5]}`,
                  () => getCharacter(Number(Character.url?.split("/")?.[5])),
                  {
                    staleTime: 70 * 1000 /* 70 second */,
                  }
                );
              }}
            >
              {index + 1} - {Character.name} - {Character.gender}:{" "}
              {Character.species}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Characters;
