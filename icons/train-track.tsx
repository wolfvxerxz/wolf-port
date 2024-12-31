'use client';

import type { Transition, Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';

const transition: Transition = {
  duration: 0.3,
  opacity: { delay: 0.15 },
};

const variants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (custom: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      ...transition,
      delay: 0.1 * custom,
    },
  }),
};

const TrainTrackIcon = () => {
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
        <path d="M2 17 17 2" />
        <motion.path
          d="m2 14 8 8"
          variants={variants}
          animate={controls}
          custom={4}
        />
        <motion.path
          d="m5 11 8 8"
          variants={variants}
          animate={controls}
          custom={3}
        />
        <motion.path
          d="m8 8 8 8"
          variants={variants}
          animate={controls}
          custom={2}
        />
        <motion.path
          d="m11 5 8 8"
          variants={variants}
          animate={controls}
          custom={1}
        />
        <motion.path
          d="m14 2 8 8"
          variants={variants}
          animate={controls}
          custom={0}
        />
        <path d="M7 22 22 7" />
      </svg>
    </div>
  );
};

export { TrainTrackIcon };
