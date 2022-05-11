import React, { FC } from "react";
import Header from "../Header/Header";
import styles from "./Layout.module.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Character from "../Character/Character";
import Characters from "../Characters/Characters";
import Episode from "../Episode/Episode";
import Episodes from "../Episodes/Episodes";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";

interface LayoutProps {}

const Layout = () => (
  <div className={styles.Layout}>
    <Header />
    <main>
      <Routes>
        <Route element={<Episodes />} path="/episodes"></Route>
        <Route element={<Episode />} path="/episodes/:episodeId"></Route>
        <Route element={<Characters />} path="/characters"></Route>
        <Route element={<Character />} path="/characters/:characterId"></Route>
        <Route element={<Home />} path="/"></Route>
      </Routes>
    </main>
    <Footer />
  </div>
);

export default Layout;
