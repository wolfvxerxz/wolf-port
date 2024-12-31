'use client';

import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';

const pathVariants: Variants = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [0, 1, 0.5, 1],
    transition: {
      duration: 0.3,
      delay: 0.2,
    },
  },
};

const BluetoothConnectedIcon = () => {
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
          variants={pathVariants}
          animate={controls}
          d="m7 7 10 10-5 5V2l5 5L7 17"
        />
        <motion.line
          variants={{
            normal: { pathLength: 1, opacity: 1, pathOffset: 0 },
            animate: {
              pathLength: [0, 1],
              opacity: [0, 1],
              pathOffset: [1, 0],
              transition: {
                duration: 0.4,
              },
            },
          }}
          animate={controls}
          x1="18"
          x2="21"
          y1="12"
          y2="12"
        />
        <motion.line
          variants={{
            normal: { pathLength: 1, opacity: 1, pathOffset: 0 },
            animate: {
              pathLength: [0, 1],
              opacity: [0, 1],
              pathOffset: [-1, 0],
              transition: {
                duration: 0.2,
              },
            },
          }}
          animate={controls}
          x1="3"
          x2="6"
          y1="12"
          y2="12"
        />
      </svg>
    </div>
  );
};

export { BluetoothConnectedIcon };
