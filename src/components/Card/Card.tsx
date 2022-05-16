import React, { FC } from "react";
import { useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { getCharacter } from "../../hooks/character";
import useEpisode, { getEpisode } from "../../hooks/episode";
import { getLocation } from "../../hooks/location";
import { characterType } from "../../types/character";
import styles from "./Card.module.css";

interface CardProps {
  character: characterType;
}

const Card = (props: CardProps) => {
  const { character } = props;
  const queryClient = useQueryClient();
  const { data: episode } = useEpisode(
    Number(character.episode?.[0].split("/")?.[5])
  );

  console.log(character);

  return (
    <div className={styles.Card}>
      <img src={character.image} alt="" />
      <div className={styles.characterCard}>
        <p className={styles.characterCardTitle}>
          <Link to={`/characters/${character.url?.split("/")?.[5]}`}>
            <a
              href="#"
              onMouseEnter={async () => {
                await queryClient.prefetchQuery(
                  `character-${character.url?.split("/")?.[5]}`,
                  () => getCharacter(Number(character.url?.split("/")?.[5])),
                  {
                    staleTime: 70 * 1000 /* 70 second */,
                  }
                );
              }}
            >
              {character.name}
            </a>
          </Link>
        </p>
        <p className={styles.status}>
          <span
            className={
              character.status === "unknown"
                ? styles.statusIconNotActive
                : styles.statusIcon
            }
          ></span>
          {character.status} - {character.species}
        </p>

        <div className={styles.location}>
          <p className={styles.cardLable}>Last known location:</p>
          <Link to={`/locations/${character.location.url?.split("/")?.[5]}`}>
            <a
              href=""
              onMouseEnter={async () => {
                await queryClient.prefetchQuery(
                  `location-${character.location.url?.split("/")?.[5]}`,
                  () =>
                    getLocation(
                      Number(character.location.url?.split("/")?.[5])
                    ),
                  {
                    staleTime: 70 * 1000 /* 70 second */,
                  }
                );
              }}
            >
              {character.location.name}
            </a>
          </Link>
        </div>
        <div className={styles.episode}>
          <p className={styles.cardLable}>First seen in:</p>
          <Link to={`/episodes/${character.episode?.[0].split("/")?.[5]}`}>
            <a
              href=""
              onMouseEnter={async () => {
                await queryClient.prefetchQuery(
                  `episode-${character.episode?.[0].split("/")?.[5]}`,
                  () =>
                    getEpisode(Number(character.episode?.[0].split("/")?.[5])),
                  {
                    staleTime: 70 * 1000 /* 70 second */,
                  }
                );
              }}
            >
              {episode?.name}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
