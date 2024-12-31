'use client';

import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';

const circleVariants: Variants = {
  normal: {
    translateY: 0,
    opacity: 1,
    transition: {
      opacity: { duration: 0.2 },
      type: 'spring',
      stiffness: 150,
      damping: 15,
      bounce: 0.8,
    },
  },
  animate: {
    opacity: [0, 1],
    translateY: [-20, 0],
    transition: {
      opacity: { duration: 0.2 },
      type: 'spring',
      stiffness: 150,
      damping: 15,
      bounce: 0.8,
    },
  },
};

const secondCircleVariants: Variants = {
  normal: {
    translateY: 0,
    opacity: 1,
    transition: {
      opacity: { duration: 0.2 },
      delay: 0.15,
      type: 'spring',
      stiffness: 150,
      damping: 15,
      bounce: 0.8,
    },
  },
  animate: {
    opacity: [0, 1],
    translateY: [-20, 0],
    transition: {
      opacity: { duration: 0.2 },
      delay: 0.15,
      type: 'spring',
      stiffness: 150,
      damping: 15,
      bounce: 0.8,
    },
  },
};

const HandCoinsIcon = () => {
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
        <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
        <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
        <path d="m2 16 6 6" />
        <motion.circle
          cx="16"
          cy="9"
          r="2.9"
          animate={controls}
          variants={circleVariants}
        />
        <motion.circle
          cx="6"
          cy="5"
          r="3"
          animate={controls}
          variants={secondCircleVariants}
        />
      </svg>
    </div>
  );
};

export { HandCoinsIcon };
