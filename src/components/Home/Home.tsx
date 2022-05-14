import React, { FC } from "react";
import Card from "../Card/Card";
import styles from "./Home.module.css";

interface HomeProps {}

const Home = () => {
  console.log("aaaa");

  return (
    <div className={styles.Home}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Home;
