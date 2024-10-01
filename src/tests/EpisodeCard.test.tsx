import "@testing-library/jest-dom";
import { expect, it, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import EpisodeCard from "../components/EpisodeCard";
import { Episode } from "../types/Episode";

describe("EpisodeCard", () => {
  const mockEpisode: Episode = {
    id: "1",
    name: "Pilot",
    air_date: "December 2, 2013",
    episode: "S01E01",
    characters: [
      {
        id: "1",
        name: "Rick Sanchez",
        created: "",
        status: "",
        image: "",
        origin: {
          id: undefined,
          name: undefined,
          type: undefined,
          dimension: undefined,
          created: undefined,
        },
        type: "",
        gender: "",
        species: "",
      },
      {
        id: "2",
        name: "Morty Smith",
        created: "",
        status: "",
        image: "",
        origin: {
          id: undefined,
          name: undefined,
          type: undefined,
          dimension: undefined,
          created: undefined,
        },
        type: "",
        gender: "",
        species: "",
      },
    ],
  };

  it("renders episode details correctly", () => {
    render(
      <MemoryRouter>
        <EpisodeCard episode={mockEpisode} />
      </MemoryRouter>
    );
    // Check if the episode name is rendered
    expect(screen.getByText(/Pilot/i)).toBeInTheDocument();
    // Check if the air date and episode number are rendered
    expect(screen.getByText(/December 2, 2013 - S01E01/i)).toBeInTheDocument();
  });

  it("renders the list of characters with links", () => {
    render(
      <MemoryRouter>
        <EpisodeCard episode={mockEpisode} />
      </MemoryRouter>
    );

    // Check if character names are rendered as links
    const characterLinks = screen.getAllByRole("link");

    expect(characterLinks.length).toBe(mockEpisode.characters.length);
    expect(characterLinks[0]).toHaveTextContent("Rick Sanchez");
    expect(characterLinks[0]).toHaveAttribute("href", "/character/1");
    expect(characterLinks[1]).toHaveTextContent("Morty Smith");
    expect(characterLinks[1]).toHaveAttribute("href", "/character/2");
  });
});
