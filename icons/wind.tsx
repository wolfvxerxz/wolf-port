'use client';

import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';

const pathVariants: Variants = {
  normal: (custom: number) => ({
    pathLength: 1,
    opacity: 1,
    pathOffset: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      delay: custom,
    },
  }),
  animate: (custom: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    pathOffset: [1, 0],
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      delay: custom,
    },
  }),
};

const WindIcon = () => {
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
        <motion.path
          d="M12.8 19.6A2 2 0 1 0 14 16H2"
          variants={pathVariants}
          initial="normal"
          animate={controls}
          custom={0.2}
        />
        <motion.path
          d="M17.5 8a2.5 2.5 0 1 1 2 4H2"
          variants={pathVariants}
          initial="normal"
          animate={controls}
          custom={0}
        />
        <motion.path
          d="M9.8 4.4A2 2 0 1 1 11 8H2"
          variants={pathVariants}
          initial="normal"
          animate={controls}
          custom={0.4}
        />
      </svg>
    </div>
  );
};

export { WindIcon };
