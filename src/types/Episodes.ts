import { Episode } from "./Episode";
import { PagingInfo } from "./Paging";

export type Episodes = {
  episodes: {
    info: PagingInfo;
    results: Episode[];
  };
};
