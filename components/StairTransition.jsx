"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const StairTransition = () => {
  const activePath = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={activePath}>
        <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
          <Stairs />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { delay: 1, ease: "easeInOut", duration: 0.4 },
        }}
      />
    </AnimatePresence>
  );
};

export default StairTransition;
