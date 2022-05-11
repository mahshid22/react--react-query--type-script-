import { useQuery } from "react-query";
import axios from "axios";
import { IEpisodesResponce } from "../types/episode";

const getEpisodes = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}episode`);
  return data;
};

export default function useEpisodes() {
  return useQuery<IEpisodesResponce, Error>("episodes", getEpisodes);
}
