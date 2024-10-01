import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import CharacterCard from "../components/CharacterCard";
import HeaderTitle from "../components/HeadTitle";
import MainLayout from "../components/MainLayout";
import useGetCharacter from "../hooks/useGetCharacter";
import { useRef } from "react";

export default function CharacterPage() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useGetCharacter(id);

  const constraintsRef = useRef(null);

  return (
    <>
      <div className="mainContainer">
        <MainLayout>
          <HeaderTitle />
          {isLoading ? (
            <p className="text-center p-10">Loading...</p>
          ) : (
            <motion.div
              initial={{ rotate: 0, scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 130,
                damping: 20,
              }}
              ref={constraintsRef}
            >
              <motion.div
                drag
                dragConstraints={constraintsRef}
                className="cursor-grab"
              >
                <CharacterCard character={data} />
              </motion.div>
            </motion.div>
          )}
        </MainLayout>
      </div>
    </>
  );
}
