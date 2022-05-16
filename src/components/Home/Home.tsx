import React, { FC } from "react";
import useCharacters from "../../hooks/characters";
import Card from "../Card/Card";
import styles from "./Home.module.css";

interface HomeProps {}

const Home = () => {
  const { data: characters, status } = useCharacters();
  console.log(characters);

  return (
    <div className={styles.Home}>
      {characters &&
        characters.results.map((chr, index) => {
          return <Card key={index} character={chr} />;
        })}
    </div>
  );
};

export default Home;
