import { Info } from "./general";

export type episodeType = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export interface IEpisodesResponce {
  info: Info;
  results: episodeType[];
}
