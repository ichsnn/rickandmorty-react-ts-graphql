import { Character } from "./Character";
import { PagingInfo } from "./Paging";

export type Characters = {
  characters: {
    info: PagingInfo;
    results: Character[];
  };
};
