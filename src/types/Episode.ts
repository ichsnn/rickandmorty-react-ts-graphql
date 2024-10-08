import { Character } from "./Character";

export type Episode = {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: Character[];
};
