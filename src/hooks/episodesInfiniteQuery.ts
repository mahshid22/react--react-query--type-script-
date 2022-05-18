import axios from "axios";
import { useInfiniteQuery } from "react-query";
import { IEpisodesResponce } from "../types/episode";

const getEpisodes = async ({ pageParam = 1 }) => {
  const res = await axios.get(
    `${process.env.REACT_APP_BASE_URL}episode/?page=${pageParam}`
  );
  return res.data;
};

export default function useEpisodesInfiniteQuery() {
  return useInfiniteQuery("projects", (pageParam) => getEpisodes(pageParam), {
    getPreviousPageParam: (firstPage: IEpisodesResponce) =>
      firstPage.info.prev ? firstPage.info.prev.split("/")?.[5] : undefined,
    getNextPageParam: (lastPage: IEpisodesResponce) => {
      console.log(lastPage.info.next?.split("=")?.[1]);

      return lastPage.info.next
        ? lastPage.info.next.split("=")?.[1]
        : undefined;
    },
  });
}
