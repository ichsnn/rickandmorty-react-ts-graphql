import "@testing-library/jest-dom";
import { expect, it, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { Character } from "../types/Character";
import CharacterCard from "../components/CharacterCard";

describe("CharacterCard", () => {
  const mockCharacter: Character = {
    id: "1",
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    image: "https://example.com/rick.jpg",
    created: "",
    origin: {
      id: undefined,
      name: undefined,
      type: undefined,
      dimension: undefined,
      created: undefined,
    },
  };

  it("renders character details correctly", () => {
    render(<CharacterCard character={mockCharacter} />);

    // Check if the character's name is rendered
    expect(screen.getByText(/Rick Sanchez/i)).toBeInTheDocument();
    // Check if the character's id is rendered
    expect(screen.getByText(/1/i)).toBeInTheDocument();
    // Check if the character's status is rendered
    expect(screen.getByText(/Status/i)).toBeInTheDocument();
    expect(screen.getByText(/Alive/i)).toBeInTheDocument();
    // Check if the character's species is rendered
    expect(screen.getByText(/Species/i)).toBeInTheDocument();
    expect(screen.getByText(/Human/i)).toBeInTheDocument();
    // Check if the character's gender is rendered
    expect(screen.getByText(/Gender/i)).toBeInTheDocument();
    expect(screen.getByText(/Male/i)).toBeInTheDocument();
    // Check if the image is rendered correctly
    expect(screen.getByRole("img", { name: /Rick Sanchez/i })).toHaveAttribute(
      "src",
      mockCharacter.image
    );
  });

  it('renders default type as "Unknown" when type is not provided', () => {
    const characterWithoutType = { ...mockCharacter, type: "" };
    render(<CharacterCard character={characterWithoutType} />);

    // Check if the default type is rendered as "Unknown"
    expect(screen.getByText(/Unknown/i)).toBeInTheDocument();
  });
});
