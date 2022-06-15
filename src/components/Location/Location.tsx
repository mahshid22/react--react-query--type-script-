import React, { FC } from "react";
import { Link, useParams } from "react-router-dom";
import useCharacter from "../../hooks/character";
import useLocationQuery from "../../hooks/location";
import styles from "./Location.module.css";

interface LocationProps {}

const Location: FC<LocationProps> = () => {
  const { locationId } = useParams();

  const { status, data } = useLocationQuery(Number(locationId));
  if (status !== "success") return <div>is loading ..</div>;
  return (
    <div className={styles.Location}>
      <h2>{data.name}</h2>

      <h2>residents:</h2>
      {data.residents.map((loc) => {
        const locParts = loc.split("/").filter(Boolean);
        const characterId = locParts[locParts.length - 1];
        return <Character id={characterId} key={`chr-${characterId}`} />;
      })}
    </div>
  );
};

function Character({ id }: { id: string }) {
  const { status, data } = useCharacter(Number(id));
  if (status !== "success") return <div>is Loading</div>;
  return (
    <div>
      <Link to={`/characters/${data.id}`}>{data.name}</Link>
    </div>
  );
}
export default Location;
