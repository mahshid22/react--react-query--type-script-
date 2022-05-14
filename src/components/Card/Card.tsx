import React, { FC } from "react";
import { useQueryClient } from "react-query";
import { getCharacter } from "../../hooks/character";
import { getEpisode } from "../../hooks/episode";
import { getLocation } from "../../hooks/location";
import styles from "./Card.module.css";

interface CardProps {}

const Card = () => {
  const queryClient = useQueryClient();

  return (
    <div className={styles.Card}>
      <img src="./images/310.jpeg" alt="" />
      <div className={styles.characterCard}>
        <p className={styles.characterCardTitle}>
          <a
            href="#"
            onMouseEnter={async () => {
              await queryClient.prefetchQuery(
                `character-1`,
                () => getCharacter(1),
                {
                  staleTime: 70 * 1000 /* 70 second */,
                }
              );
            }}
          >
            Self-Congratulatory Jerry
          </a>
        </p>
        <p className={styles.status}>
          <span className={styles.statusIcon}></span>
          <span className={styles.statusIconNotActive}></span>
          Unknown - Mythological Creature
        </p>

        <div className={styles.location}>
          <p className={styles.cardLable}>Last known location:</p>
          <a
            href=""
            onMouseEnter={async () => {
              await queryClient.prefetchQuery(
                `location-1`,
                () => getLocation(1),
                {
                  staleTime: 70 * 1000 /* 70 second */,
                }
              );
            }}
          >
            Nuptia 4
          </a>
        </div>
        <div className={styles.episode}>
          <p className={styles.cardLable}>First seen in:</p>
          <a
            href=""
            onMouseEnter={async () => {
              await queryClient.prefetchQuery(
                `episode-1`,
                () => getEpisode(1),
                {
                  staleTime: 70 * 1000 /* 70 second */,
                }
              );
            }}
          >
            Big Trouble in Little Sanchez
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
