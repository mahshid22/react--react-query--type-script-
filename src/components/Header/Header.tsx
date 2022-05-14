import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
// import { Switch, Route, Link as RouterLink } from "react-router-dom";

interface HeaderProps {}

const Header = () => (
  <>
    <nav className={styles.Header}>
      <div className={styles.HeaderLogo}>
        <img src="./images/icons/morty-smith.png" alt="logo icon" />
      </div>
      <div className={styles.HeaderLinks}>
        <Link to="/home" className={styles.HeaderActiveLinks}>
          <a href="">home</a>
        </Link>
        <Link to="/Episodes">
          <a href="">Episodes</a>
        </Link>
        <Link to="/Locations">
          <a href="">Locations</a>
        </Link>
        <Link to="/Characters">
          <a href="">Characters</a>
        </Link>
      </div>
    </nav>
    <h1 className={styles.HeaderTitle}>The Rick and Morty</h1>
  </>
);

export default Header;
