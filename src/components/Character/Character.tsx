import React, { FC } from "react";
import useCharacter from "../../hooks/character";
import styles from "./Character.module.css";
import { useParams } from "react-router";
import useEpisode from "../../hooks/episode";
import { stat } from "fs";

interface CharacterProps {}

const Character: FC<CharacterProps> = () => {
  const { characterId } = useParams();
  const { status, data, error, isFetching } = useCharacter(Number(characterId));
  if (status !== "success") return <div>is Loading ...</div>;
  return (
    <div className={styles.Character}>
      <h1>{data.name}</h1>
      <p>Location : {data?.location.name}</p>
      <p>Origin : {data?.origin.name}</p>
      <p>Species : {data?.species}</p>
      <p>Status : {data?.status}</p>
      <p>Gender : {data?.gender}</p>
      <div>
        <h2>Episodes</h2>
        {data.episode.map((eps) => {
          const episodeUrlParts = eps.split("/").filter(Boolean);
          const episodeId = episodeUrlParts[episodeUrlParts.length - 1];
          return <Episode id={episodeId} key={`episode-${episodeId}`} />;
        })}
      </div>
    </div>
  );
};

function Episode({ id }: { id: string }) {
  const { status, data, error, isFetching } = useEpisode(Number(id));
  if (status !== "success") return <div>is Loading ...</div>;
  return (
    <div>
      {data.episode} - {data.name} - {data.air_date}
    </div>
  );
}
export default Character;
