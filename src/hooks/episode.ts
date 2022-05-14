import { useQuery } from "react-query";
import axios from "axios";
import { episodeType } from "../types/episode";

export const getEpisode = async (episodeId: number | null) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}episode/${episodeId}`
  );
  return data;
};

export default function useEpisode(episodeId: number | null) {
  return useQuery<episodeType, Error>(
    `episode-${episodeId}`,
    () => getEpisode(episodeId),
    {
      enabled: !!episodeId,
    }
  );
}
