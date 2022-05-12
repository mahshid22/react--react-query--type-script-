import { Info } from "./general";

export type locationType = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

export interface ILocationResponce {
  info: Info;
  results: locationType[];
}
