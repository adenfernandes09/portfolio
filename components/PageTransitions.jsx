"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
const PageTransitions = ({ children }) => {
  const activePath = usePathname();
  return (
    <AnimatePresence>
      <div key={activePath}>
        {children}

        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.7, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        />
      </div>
    </AnimatePresence>
  );
};

export default PageTransitions;
