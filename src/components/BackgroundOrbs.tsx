"use client";

import { motion } from "framer-motion";

export function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-2]">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/15 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-primary/10 blur-[150px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1],
          x: [0, 50, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute top-[40%] left-[30%] w-[30%] h-[30%] rounded-full bg-accent/10 blur-[100px]"
      />
      {/* Optional: Grid overlay for texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
    </div>
  );
}
