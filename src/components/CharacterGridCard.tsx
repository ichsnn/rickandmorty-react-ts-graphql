import { Link } from "react-router-dom";
import { Character } from "../types/Character";
import { motion } from "framer-motion";

interface CharacterGridCardProps {
  character: Character;
}

export default function CharacterGridCard({
  character,
}: CharacterGridCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg flex flex-col items-center shadow-[10px_10px_0px_0px_#000000] border border-slate-500 overflow-hidden hover:shadow-[16px_16px_0px_0px_#000000] duration-300 hover:scale-105 transition-all"
      // fade in animation
      initial={{ opacity: 0, y: 10, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ ease: "easeIn", duration: 0.5 }}
    >
      <Link to={`/character/${character.id}`} className="w-full flex flex-col">
        <div className="w-full h-auto">
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-center gap-1">
            <p className="font-extrabold text-lg text-nowrap text-ellipsis overflow-hidden">
              {character.name}
            </p>
            <p className="font-medium before:content-['#'] text-sm">
              {character.id}
            </p>
          </div>
          <div className="w-full text-sm text-gray-500 flex flex-col  text-center items-center text-ellipsis overflow-hidden">
            <p>{character.status}</p>
            <p>{character.origin.name}</p>
            <p>{new Date(character.created).toLocaleDateString()}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
