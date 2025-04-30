import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CardStats({ card }) {
  const [isMagnified, setIsMagnified] = useState(false);

  const toggleMagnify = () => {
    setIsMagnified((prev) => !prev);
  };

  return (
    <>
      <div className="grid md:grid-rows-2 grid-cols-1 gap-0 items-center md:mb-7">
        <p className="self-end">{card.name}</p>
        <motion.div
          layoutId={`card-${card._id}`}
          onClick={toggleMagnify}
          className="w-[120px] h-[160px] duration-200 rounded-xl bg-cover bg-center m-auto md:mt-1 cursor-pointer"
          style={{ backgroundImage: `url(${card.image})` }}
        />
      </div>


        <AnimatePresence>
        {isMagnified && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-10 bg-opacity-10"
            onClick={toggleMagnify}
          >
            <motion.div
              layoutId={`card-${card._id}`}
              className="w-[240px] h-[320px] rounded-xl bg-cover bg-center shadow-xl cursor-pointer z-20"
              style={{ backgroundImage: `url(${card.image})` }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.1 }}
            />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
