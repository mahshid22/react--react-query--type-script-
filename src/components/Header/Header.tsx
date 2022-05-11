import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
// import { Switch, Route, Link as RouterLink } from "react-router-dom";

interface HeaderProps {}

const Header = () => (
  <nav className={styles.Header}>
    <Link to="/home">
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
  </nav>
);

export default Header;
