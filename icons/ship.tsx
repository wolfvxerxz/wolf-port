'use client';

import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';

const pathVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      delay: 0.15,
      opacity: { delay: 0.1 },
    },
  },
};

const gVariants: Variants = {
  normal: { rotate: 0 },
  animate: {
    rotate: [-3, 3, -3],
    transition: {
      repeat: Infinity,
      repeatType: 'mirror' as const,
      duration: 1.2,
      ease: 'easeInOut',
    },
  },
};

const ShipIcon = () => {
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
          d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
          variants={pathVariants}
          animate={controls}
          custom={2}
        />
        <motion.g variants={gVariants} animate={controls}>
          <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76" />
          <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
          <path d="M12 10v4" />
          <path d="M12 2v3" />
        </motion.g>
      </svg>
    </div>
  );
};

export { ShipIcon };
