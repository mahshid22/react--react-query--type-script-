import React, { FC } from "react";
import { useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { getLocation } from "../../hooks/location";
import useLocations from "../../hooks/locations";
import styles from "./Locations.module.css";

interface LocationsProps {}

const Locations: FC<LocationsProps> = () => {
  const queryClient = useQueryClient();
  const { data, status } = useLocations();
  if (status !== "success") return <div>is Loading ...</div>;
  return (
    <div className={styles.Locations}>
      <h2>Locations :</h2>
      {data.results.map((location) => {
        return (
          <Link to={`/locations/${location.id}`}>
            <p
              onMouseEnter={async () => {
                await queryClient.prefetchQuery(
                  `location-${location.id}`,
                  () => getLocation(Number(location.id)),
                  {
                    staleTime: 70 * 1000 /* 70 second */,
                  }
                );
              }}
            >
              {location.name}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Locations;
