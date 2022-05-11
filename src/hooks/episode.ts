import { useQuery } from "react-query";
import axios from "axios";
import { IEpisodesResponce } from "../types/episode";

const getEpisode = async (episodeId: number | null) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}episode/${episodeId}`
  );
  return data;
};

export default function useEpisode(episodeId: number | null) {
  return useQuery<IEpisodesResponce, Error>(
    `episode-${episodeId}`,
    () => getEpisode(episodeId),
    {
      enabled: !!episodeId,
    }
  );
}
