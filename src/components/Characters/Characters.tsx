import React, { useState } from "react";
import { useQueryClient } from "react-query";
import { Link, useParams } from "react-router-dom";
import { getCharacter } from "../../hooks/character";
import useCharactersPaged from "../../hooks/characterWithPagination";
import styles from "./Characters.module.css";

const Characters = () => {
  const queryClient = useQueryClient();
  const { pageId } = useParams();
  const { data: Characters, isLoading } = useCharactersPaged(pageId);

  if (isLoading) {
    return <div className={styles.Characters}>is Loading ..</div>;
  }
  return (
    <div className={styles.Characters}>
      <h2>Character :</h2>
      {Characters?.results.map((Character, index) => {
        return (
          <Link to={`/character/${Character.id}`}>
            <p
              onMouseEnter={async () => {
                await queryClient.prefetchQuery(
                  `character-${Character.id}`,
                  () => getCharacter(Number(Character.id)),
                  {
                    staleTime: 70 * 1000 /* 70 second */,
                  }
                );
              }}
            >
              {Character.id} - {Character.name} - {Character.gender}:{" "}
              {Character.species}
            </p>
          </Link>
        );
      })}
      <Link to={`/characters/${Number(pageId) - 1}`}>
        <button disabled={!Characters?.info.prev}>-</button>
      </Link>
      <Link to={`/characters/${Number(pageId) + 1}`}>
        <button disabled={!Characters?.info.next}>+</button>
      </Link>
    </div>
  );
};

export default Characters;
