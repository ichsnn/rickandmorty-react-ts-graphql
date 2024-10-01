import { gql } from "graphql-request";

export const PAGINGINFO_FRAGMENT = gql`
  fragment pagingInfo on Info {
    count
    pages
    next
    prev
  }
`;

export const ORIGIN_FRAGMENT = gql`
  fragment origin on Location {
    id
    name
    type
    dimension
    created
  }
`;

export const CHARACTER_FRAGMENT = gql`
  ${ORIGIN_FRAGMENT}
  fragment characterDetail on Character {
    created
    id
    name
    status
    image
    species
    type
    gender
    origin {
      ...origin
    }
  }
`;

export const EPISODE_FRAGMENT = gql`
  ${CHARACTER_FRAGMENT}
  fragment episodeDetail on Episode {
    id
    name
    air_date
    episode
    characters {
      ...characterDetail
    }
  }
`;
