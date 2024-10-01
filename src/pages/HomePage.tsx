import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CharacterGridCard from "../components/CharacterGridCard";
import ChipButton from "../components/ChipButton";
import EpisodeCard from "../components/EpisodeCard";
import HeaderTitle from "../components/HeadTitle";
import InputTextBox from "../components/InputTextBox";
import LoadingComponent from "../components/LoadingComponent";
import MainLayout from "../components/MainLayout";
import ScrollToTopButton from "../components/ScrollToTopButton";
import useGetListOfCharacters from "../hooks/useGetListOfCharacters";
import useGetListOfEpisodes from "../hooks/useGetListOfEpisodes";

type ListToDisplay = "episodes" | "characters";

function HomePage() {
  const [listToDisplay, setListToDisplay] = useState<ListToDisplay>("episodes");
  const [searchEpisodeName, setSearchEpisodeName] = useState<string>("");
  const [searchEpisodeNumber, setSearchEpisodeNumber] = useState<string>("");
  const [searchCharacterName, setSearchCharacterName] = useState<string>("");

  const {
    data: episodesData,
    isFetching: isFetchingEpisodes,
    fetchNextPage: episodeFetchNextPage,
    hasNextPage: episodeHasNextPage,
  } = useGetListOfEpisodes(searchEpisodeName, searchEpisodeNumber);

  const {
    data: charactersData,
    isFetching: isFetchingCharacters,
    fetchNextPage: charactersFetchNextPage,
    hasNextPage: characterFetchNextPage,
  } = useGetListOfCharacters(searchCharacterName);

  useEffect(() => {
    const handleScrollEpisodes = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight &&
        listToDisplay === "episodes"
      ) {
        if (episodeHasNextPage) {
          episodeFetchNextPage();
        }
      }
    };
    window.addEventListener("scroll", handleScrollEpisodes);
    return () => window.removeEventListener("scroll", handleScrollEpisodes);
  }, [episodeFetchNextPage, episodeHasNextPage, listToDisplay]);

  useEffect(() => {
    const handleScrollCharacters = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight &&
        listToDisplay === "characters"
      ) {
        if (characterFetchNextPage) {
          charactersFetchNextPage();
        }
      }
    };
    window.addEventListener("scroll", handleScrollCharacters);
    return () => window.removeEventListener("scroll", handleScrollCharacters);
  }, [charactersFetchNextPage, characterFetchNextPage, listToDisplay]);

  const onSearchEpisodeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchEpisodeName(e.target.value);
  };

  const onSearchEpisodeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchEpisodeNumber(e.target.value);
  };

  const onSearchCharacter = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchCharacterName(e.target.value);
  };

  return (
    <>
      <div className="mainContainer">
        <ScrollToTopButton />
        <MainLayout>
          <HeaderTitle />
          <div className="flex flex-wrap gap-2 mb-6 z-50">
            <ChipButton
              isActive={listToDisplay === "episodes"}
              onClick={() => {
                setListToDisplay("episodes");
                scrollTo(0, 0);
              }}
            >
              Episodes
            </ChipButton>
            <ChipButton
              isActive={listToDisplay === "characters"}
              onClick={() => {
                setListToDisplay("characters");
                scrollTo(0, 0);
              }}
            >
              Characters
            </ChipButton>
          </div>

          {listToDisplay === "characters" && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
              }}
            >
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mb-6 flex gap-2"
              >
                <InputTextBox
                  placeholder="Search Characters Name..."
                  className="w-full"
                  value={searchCharacterName}
                  onChange={onSearchCharacter}
                />
              </form>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {charactersData?.pages.map((characters) =>
                  characters.characters.results.map((character) => (
                    <CharacterGridCard
                      key={character.id}
                      character={character}
                    />
                  ))
                )}
              </div>
              {charactersData?.pages[0].characters.results.length === 0 && (
                <p className="text-center text-xl font-bold text-gray-500 py-10">
                  No characters found
                </p>
              )}
              {isFetchingCharacters && <LoadingComponent />}
            </motion.div>
          )}

          {listToDisplay === "episodes" && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
              }}
            >
              <form
                className="mb-6 flex flex-wrap md:flex-nowrap gap-4 md:gap-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <InputTextBox
                  placeholder="Search Episode Name... (Example: Pilot)"
                  className="w-full"
                  value={searchEpisodeName}
                  onChange={onSearchEpisodeName}
                />
                <InputTextBox
                  placeholder="Search Episode... (Example: S01E01)"
                  className="w-full"
                  value={searchEpisodeNumber}
                  onChange={onSearchEpisodeNumber}
                />
              </form>
              <div className="flex flex-col gap-5">
                {episodesData?.pages.map((episodes) =>
                  episodes.episodes.results.map((episode) => (
                    <EpisodeCard key={episode.id} episode={episode} />
                  ))
                )}
              </div>
              {episodesData?.pages[0].episodes.results.length === 0 && (
                <p className="text-center text-xl font-bold text-gray-500 py-10">
                  No episodes found
                </p>
              )}
              {isFetchingEpisodes && <LoadingComponent />}
            </motion.div>
          )}
        </MainLayout>
      </div>
    </>
  );
}

export default HomePage;
