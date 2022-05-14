import React, { FC } from "react";
import styles from "./Card.module.css";

interface CardProps {}

const Card = () => (
  <div className={styles.Card}>
    <img src="./images/310.jpeg" alt="" />
    <div className={styles.characterCard}>
      <p className={styles.characterCardTitle}>
        <a href="#">Self-Congratulatory Jerry</a>
      </p>
      <p className={styles.status}>
        <span className={styles.statusIcon}></span>
        <span className={styles.statusIconNotActive}></span>
        Unknown - Mythological Creature
      </p>

      <div className={styles.location}>
        <p className={styles.cardLable}>Last known location:</p>
        <a href="">Nuptia 4</a>
      </div>
      <div className={styles.episode}>
        <p className={styles.cardLable}>First seen in:</p>
        <a href="">Big Trouble in Little Sanchez</a>
      </div>
    </div>
  </div>
);

export default Card;
