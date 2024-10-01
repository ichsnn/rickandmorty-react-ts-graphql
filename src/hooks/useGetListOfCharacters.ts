import { useInfiniteQuery } from "@tanstack/react-query";
import graphqlClient from "../services/graphql/graphqlClient";
import { CHARACTERS_QUERY } from "../services/graphql/query";
import { Characters } from "../types/Characters";

export default function useGetListOfCharacters(name?: string) {
  return useInfiniteQuery({
    queryKey: ["characters", name],
    queryFn: ({ pageParam = 1 }) =>
      graphqlClient.request<Characters>(CHARACTERS_QUERY, {
        page: pageParam,
        filter: {
          name,
        },
      }),
    getNextPageParam: (lastPage) => {
      return lastPage.characters.info.next;
    },
  });
}
