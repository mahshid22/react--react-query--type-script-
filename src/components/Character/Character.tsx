import React, { FC } from 'react';
import styles from './Character.module.css';

interface CharacterProps {}

const Character: FC<CharacterProps> = () => (
  <div className={styles.Character}>
    Character Component
  </div>
);

export default Character;
