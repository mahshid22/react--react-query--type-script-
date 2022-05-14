import { useQuery } from "react-query";
import axios from "axios";
import { characterType } from "../types/character";

export const getCharacter = async (characterId: number | null) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}character/${characterId}`
  );
  return data;
};

export default function useCharacter(characterId: number | null) {
  return useQuery<characterType, Error>(
    `character-${characterId}`,
    () => getCharacter(characterId),
    {
      enabled: !!characterId,
    }
  );
}
