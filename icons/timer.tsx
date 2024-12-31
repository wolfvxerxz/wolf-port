'use client';

import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';

const handVariants: Variants = {
  normal: {
    rotate: 0,
    originX: '12px',
    originY: '14px',
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  animate: {
    rotate: 300,
    transition: {
      delay: 0.1,
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const buttonVariants: Variants = {
  normal: {
    scale: 1,
    y: 0,
  },
  animate: {
    scale: [0.9, 1],
    y: [0, 1, 0],
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const TimerIcon = () => {
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
        <motion.line
          x1="10"
          x2="14"
          y1="2"
          y2="2"
          animate={controls}
          variants={buttonVariants}
        />
        <motion.line
          x1="12"
          x2="15"
          y1="14"
          y2="11"
          initial="normal"
          animate={controls}
          variants={handVariants}
        />
        <circle cx="12" cy="14" r="8" />
      </svg>
    </div>
  );
};

export { TimerIcon };
