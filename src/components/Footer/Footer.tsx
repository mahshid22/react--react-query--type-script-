import React, { FC } from "react";
import styles from "./Footer.module.css";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className={styles.Footer}>
      <h2>Footer</h2>
      <p>Something here to give the footer a purpose!</p>
      <p>Copyright © Your Website 2022.</p>
    </footer>
  );
};

export default Footer;
