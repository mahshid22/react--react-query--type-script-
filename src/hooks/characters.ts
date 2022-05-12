import { useQuery } from "react-query";
import axios from "axios";
import { ICharacterResponce } from "../types/character";

const getCharacters = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}character`
  );
  return data;
};

export default function useCharacters() {
  return useQuery<ICharacterResponce, Error>("characters", getCharacters);
}
