import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import useLocationQuery from "../../hooks/location";
import styles from "./Location.module.css";

interface LocationProps {}

const Location: FC<LocationProps> = () => {
  const locationId = null;
  const { status, data, error, isFetching } = useLocationQuery(locationId);
  return <div className={styles.Location}>Location Component</div>;
};

export default Location;
