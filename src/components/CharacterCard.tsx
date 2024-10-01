import { Character } from "../types/Character";

interface CharacterCardProps {
  character?: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <div className="flex flex-col bg-white mx-auto rounded-lg overflow-hidden border border-slate-500 max-w-xs shadow-[10px_10px_0px_0px_#000000] hover:shadow-[16px_16px_0px_0px_#000000] duration-300 hover:scale-105 transition-all">
      <img
        src={character?.image}
        alt={character?.name}
        className="w-full aspect-square"
        draggable={false}
      />
      <div className="flex-1 p-5">
        <div className="flex justify-be gap-2 mb-3">
          <h2 className="font-extrabold text-2xl">{character?.name}</h2>
          <p className="before:content-['#'] font-bold">{character?.id}</p>
        </div>
        <p className="flex gap-2 justify-between">
          <span>Status</span>
          <span className="text-right">{character?.status}</span>
        </p>
        <p className="flex gap-2 justify-between">
          <span>Species</span>
          <span className="text-right">{character?.species}</span>
        </p>
        <p className="flex gap-2 justify-between">
          <span>Type</span>
          <span className="text-right">{character?.type || "Unknown"}</span>
        </p>
        <p className="flex gap-2 justify-between">
          <span>Gender</span>
          <span className="text-right">{character?.gender}</span>
        </p>
      </div>
    </div>
  );
}
