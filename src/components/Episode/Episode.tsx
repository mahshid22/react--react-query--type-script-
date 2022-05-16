import React, { FC } from "react";
import { useParams } from "react-router";
import useCharacter from "../../hooks/character";
import useEpisode from "../../hooks/episode";
import styles from "./Episode.module.css";

interface EpisodeProps {}

const Episode: FC<EpisodeProps> = () => {
  const { episodeId } = useParams();
  const { status, data, error, isFetching } = useEpisode(Number(episodeId));
  if (status !== "success") return <div>is Loading...</div>;
  return (
    <div className={styles.Episode}>
      <h2>{data.name}</h2>
      <p>{data.air_date}</p>

      <h2>Characters</h2>
      {data.characters.map((chr) => {
        const chreUrlParts = chr.split("/").filter(Boolean);
        const characterId = chreUrlParts[chreUrlParts.length - 1];
        return <Character id={characterId} key={`chr-${characterId}`} />;
      })}
    </div>
  );
};

function Character({ id }: { id: string }) {
  const { status, data, error, isFetching } = useCharacter(Number(id));
  if (status !== "success") return <div>is Loading</div>;
  return <div>{data.name}</div>;
}
export default Episode;
