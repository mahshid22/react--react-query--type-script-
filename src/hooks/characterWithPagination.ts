import { useQuery } from "react-query";
import axios from "axios";
import { ICharacterResponce } from "../types/character";

const getCharacters = async (p: string | undefined) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}character/?page=${p}`
  );
  return data;
};

export default function useCharactersPaged(page: string | undefined) {
  return useQuery<ICharacterResponce, Error>(
    ["characters", page],
    () => getCharacters(page),
    { keepPreviousData: true, staleTime: 5000 }
  );
}
