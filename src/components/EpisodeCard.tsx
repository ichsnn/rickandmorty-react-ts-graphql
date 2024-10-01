import { Link } from "react-router-dom";
import { Episode } from "../types/Episode";

interface EpisodeCardProps {
  episode: Episode;
}

export default function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <div className="p-5 border bg-white border-slate-500 rounded-xl shadow-[10px_10px_0px_0px_#000000]">
      <div>
        <div className="flex gap-4 items-center mb-3">
          <p className="font-semibold text-white text-xl bg-slate-500 rounded-full w-[4ch] aspect-square flex justify-center items-center">
            {episode.id}
          </p>
          <h2 className="font-bold text-slate-700 text-lg">{episode.name}</h2>
        </div>
        <p className="text-sm font-normal text-slate-600 mb-2">
          {episode.air_date} - {episode.episode}
        </p>
        <div>
          <p className="font-semibold mb-1">Characters</p>
          <p className="font-normal text-base leading-tight">
            {episode.characters.map((character, index) => (
              <span key={`ch-${character.id}`}>
                <Link
                  to={`/character/${character.id}`}
                  preventScrollReset={true}
                  className="hover:text-sky-500 hover:underline cursor-pointer"
                >
                  {character.name}
                </Link>
                {index < episode.characters.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
