'use client';

import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';

const pathVariants: Variants = {
  normal: { pathLength: 1, opacity: 1, pathOffset: 0 },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
    pathOffset: [1, 0],
  },
};

const offlineVariants: Variants = {
  normal: { pathLength: 1, opacity: 1 },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
  },
};

const BluetoothOffIcon = () => {
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
          transition={{
            duration: 0.3,
          }}
          d="m17 17-5 5V12l-5 5"
        />
        <motion.path
          variants={offlineVariants}
          animate={controls}
          transition={{
            duration: 0.2,
            delay: 0.3,
          }}
          d="m2 2 20 20"
        />
        <motion.path
          variants={pathVariants}
          animate={controls}
          transition={{
            duration: 0.3,
          }}
          d="M14.5 9.5 17 7l-5-5v4.5"
        />
      </svg>
    </div>
  );
};

export { BluetoothOffIcon };
