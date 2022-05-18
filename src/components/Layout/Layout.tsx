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
import Locations from "../Locations/Locations";
import Location from "../Location/Location";

interface LayoutProps {}

const Layout = () => (
  <div className={styles.Layout}>
    <div className={styles.LayoutMain}>
      <Header />
      <main>
        <Routes>
          <Route element={<Episodes />} path="/episodes"></Route>
          <Route element={<Episode />} path="/episodes/:episodeId"></Route>
          <Route element={<Characters />} path="/characters/:pageId"></Route>
          <Route element={<Character />} path="/character/:characterId"></Route>
          <Route element={<Locations />} path="/locations"></Route>
          <Route element={<Location />} path="/locations/:locationId"></Route>
          <Route element={<Home />} path="/"></Route>
        </Routes>
      </main>
    </div>

    <Footer />
  </div>
);

export default Layout;
