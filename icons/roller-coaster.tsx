'use client';

import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';

const variants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (custom: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      delay: 0.1 * custom,
      opacity: { delay: 0.1 * custom },
    },
  }),
};

const RollerCoasterIcon = () => {
  const controls = useAnimation();

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path d="M6 19V5" variants={variants} animate={controls} />
        <motion.path d="M10 19V6.8" variants={variants} animate={controls} />
        <motion.path d="M14 19v-7.8" variants={variants} animate={controls} />
        <motion.path d="M18 5v4" variants={variants} animate={controls} />
        <motion.path d="M18 19v-6" variants={variants} animate={controls} />
        <motion.path d="M22 19V9" variants={variants} animate={controls} />
        <motion.path
          d="M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65"
          variants={variants}
          animate={controls}
          custom={2}
        />
      </svg>
    </div>
  );
};

export { RollerCoasterIcon };
