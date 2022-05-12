import React, { FC } from "react";
import styles from "./Home.module.css";

interface HomeProps {}

const Home = () => {
  console.log("aaaa");

  return (
    <div className={styles.Home}>
      <p>this is a demo fore using react-query instead of redux</p>
      <p>I use rickandmortyapi API </p>
      <p>you could navigate between pages using headers categories.</p>
    </div>
  );
};

export default Home;
