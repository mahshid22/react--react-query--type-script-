import { useQuery } from "react-query";
import axios from "axios";
import { ILocationResponce } from "../types/location";

const getLocations = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}location`);
  return data;
};

export default function useEpisodes() {
  return useQuery<ILocationResponce, Error>("locations", getLocations);
}
