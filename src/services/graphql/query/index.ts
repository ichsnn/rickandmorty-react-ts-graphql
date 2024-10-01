import { gql } from "graphql-request";
import {
  CHARACTER_FRAGMENT,
  EPISODE_FRAGMENT,
  PAGINGINFO_FRAGMENT,
} from "../fragment";

export const EPISODES_QUERY = gql`
  ${PAGINGINFO_FRAGMENT}
  ${EPISODE_FRAGMENT}
  query getEpisodes($page: Int!, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        ...pagingInfo
      }
      results {
        ...episodeDetail
      }
    }
  }
`;

export const CHARACTERS_QUERY = gql`
  ${PAGINGINFO_FRAGMENT}
  ${CHARACTER_FRAGMENT}
  query getCharacters($page: Int!, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        ...pagingInfo
      }
      results {
        ...characterDetail
      }
    }
  }
`;

export const CHARACTER_QUERY = gql`
  ${CHARACTER_FRAGMENT}
  query getCharacter($id: ID!) {
    character(id: $id) {
      ...characterDetail
    }
  }
`;
