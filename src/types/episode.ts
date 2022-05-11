export type episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export interface IEpisodesResponce {
  info: Info;
  results: episode[];
}
