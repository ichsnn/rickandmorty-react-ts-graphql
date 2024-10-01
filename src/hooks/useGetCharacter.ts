import { useQuery } from "@tanstack/react-query";
import graphqlClient from "../services/graphql/graphqlClient";
import { Character } from "../types/Character";
import { CHARACTER_QUERY } from "../services/graphql/query";

export default function useGetCharacter(id?: string) {
  return useQuery({
    queryKey: ["character", id],
    queryFn: async () => {
      const { character } = await graphqlClient.request<{
        character: Character;
      }>(CHARACTER_QUERY, {
        id,
      });
      return character;
    },
  });
}
