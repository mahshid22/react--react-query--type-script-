import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

interface HeaderProps {}

const Header = () => (
  <>
    <nav className={styles.Header}>
      <div className={styles.HeaderLogo}>
        <Link to="/">
          <img src="./images/icons/morty-smith.png" alt="logo icon" />
        </Link>
      </div>
      <div className={styles.HeaderLinks}>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.HeaderActiveLinks : ""
          }
          to="/"
        >
          home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.HeaderActiveLinks : ""
          }
          to="/Episodes"
        >
          Episodes
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.HeaderActiveLinks : ""
          }
          to="/Locations"
        >
          Locations
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.HeaderActiveLinks : ""
          }
          to="/Characters/1"
        >
          Characters
        </NavLink>
      </div>
    </nav>
    <h1 className={styles.HeaderTitle}>The Rick and Morty</h1>
  </>
);

export default Header;
