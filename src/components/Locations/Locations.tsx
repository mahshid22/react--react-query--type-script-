import React, { FC } from "react";
import useLocations from "../../hooks/locations";
import styles from "./Locations.module.css";

interface LocationsProps {}

const Locations: FC<LocationsProps> = () => {
  const { data, status } = useLocations();

  return <div className={styles.Locations}>Locations Component</div>;
};

export default Locations;
