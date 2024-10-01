import { useParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import HeaderTitle from "../components/HeadTitle";
import MainLayout from "../components/MainLayout";
import useGetCharacter from "../hooks/useGetCharacter";

export default function CharacterPage() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useGetCharacter(id);

  return (
    <>
      <div className="mainContainer">
        <MainLayout>
          <HeaderTitle />
          {isLoading ? (
            <p className="text-center p-10">Loading...</p>
          ) : (
            <CharacterCard character={data} />
          )}
        </MainLayout>
      </div>
    </>
  );
}
