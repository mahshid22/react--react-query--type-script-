import React, { FC, lazy, Suspense } from "react";
import Header from "../Header/Header";
import styles from "./Layout.module.css";
import { Route, Routes } from "react-router-dom";

const Character = lazy(() => import("src/components/Character/Character"));
const Characters = lazy(() => import("src/components/Characters/Characters"));
const Home = lazy(() => import("src/components/Home/Home"));
const Episodes = lazy(() => import("src/components/Episodes/Episodes"));
const Episode = lazy(() => import("src/components/Episode/Episode"));
const Footer = lazy(() => import("src/components/Footer/Footer"));
const Locations = lazy(() => import("src/components/Locations/Locations"));
const Location = lazy(() => import("src/components/Location/Location"));

const Layout = () => (
  <div className={styles.Layout}>
    <div className={styles.LayoutMain}>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<Episodes />} path="/episodes"></Route>
            <Route element={<Episode />} path="/episodes/:episodeId"></Route>
            <Route element={<Characters />} path="/characters/:pageId"></Route>
            <Route
              element={<Character />}
              path="/character/:characterId"
            ></Route>
            <Route element={<Locations />} path="/locations"></Route>
            <Route element={<Location />} path="/locations/:locationId"></Route>
            <Route element={<Home />} path="/"></Route>
          </Routes>
        </Suspense>
      </main>
    </div>

    <Footer />
  </div>
);

export default Layout;
