import { useInfiniteQuery } from "@tanstack/react-query";
import graphqlClient from "../services/graphql/graphqlClient";
import { EPISODES_QUERY } from "../services/graphql/query";
import { Episodes } from "../types/Episodes";

export default function useGetListOfEpisodes(
  episodeName?: string,
  episodeNumber?: string
) {
  return useInfiniteQuery({
    queryKey: ["episodes", episodeName, episodeNumber],
    queryFn: ({ pageParam = 1 }) =>
      graphqlClient.request<Episodes>(EPISODES_QUERY, {
        page: pageParam,
        filter: {
          name: episodeName,
          episode: episodeNumber,
        },
      }),
    getNextPageParam: (lastPage) => {
      return lastPage.episodes.info.next;
    },
  });
}
