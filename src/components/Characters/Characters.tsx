import React, { FC } from 'react';
import styles from './Characters.module.css';

interface CharactersProps {}

const Characters: FC<CharactersProps> = () => (
  <div className={styles.Characters}>
    Characters Component
  </div>
);

export default Characters;
