import { motion } from "motion/react";

export function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <h1 className="text-4xl font-bold tracking-tight">X-ENTERTAINMENT</h1>
          <p className="text-sm tracking-widest text-gray-400 mt-2">DJ MACX</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
