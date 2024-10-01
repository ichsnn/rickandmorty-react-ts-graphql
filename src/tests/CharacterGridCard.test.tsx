import "@testing-library/jest-dom";
import { expect, it, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { Character } from "../types/Character";
import { MemoryRouter } from "react-router-dom";
import CharacterGridCard from "../components/CharacterGridCard";

describe("CharacterGridCard", () => {
  const mockCharacter: Character = {
    id: "1",
    name: "Rick Sanchez",
    status: "Alive",
    origin: { name: "Earth" },
    created: "2017-11-04T22:40:20.773Z",
    image: "https://example.com/rick.jpg",
    type: "",
    gender: "",
    species: "",
  };

  it("renders character details correctly", () => {
    render(
      <MemoryRouter>
        <CharacterGridCard character={mockCharacter} />
      </MemoryRouter>
    );

    // Check if the character's name is rendered
    expect(screen.getByText(/Rick Sanchez/i)).toBeInTheDocument();
    // Check if the character's status is rendered
    expect(screen.getByText(/Alive/i)).toBeInTheDocument();
    // Check if the character's origin is rendered
    expect(screen.getByText(/Earth/i)).toBeInTheDocument();
    // Check if the character's creation date is rendered
    expect(screen.getByText(/05\/11\/2017/i)).toBeInTheDocument();
    // Check if the image is rendered correctly
    expect(screen.getByRole("img", { name: /Rick Sanchez/i })).toHaveAttribute(
      "src",
      mockCharacter.image
    );
  });

  it("renders the link to the character details page", () => {
    render(
      <MemoryRouter>
        <CharacterGridCard character={mockCharacter} />
      </MemoryRouter>
    );

    // Check if the link to the character's page is rendered
    const link = screen.getByRole("link", { name: /Rick Sanchez/i });
    expect(link).toHaveAttribute("href", "/character/1");
  });
});
