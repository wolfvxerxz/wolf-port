'use client';

import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';

const dropVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const dropChildVariants: Variants = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [1, 0.2, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const dropPath = [
  { id: 'drop1', d: 'M14 17v.01' },
  { id: 'drop2', d: 'M10 16v.01' },
  { id: 'drop3', d: 'M13 13v.01' },
  { id: 'drop4', d: 'M16 10v.01' },
  { id: 'drop5', d: 'M11 20v.01' },
  { id: 'drop6', d: 'M17 14v.01' },
  { id: 'drop7', d: 'M20 11v.01' },
];

const ShowerHeadIcon = () => {
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
        <path d="m4 4 2.5 2.5" />
        <path d="M13.5 6.5a4.95 4.95 0 0 0-7 7" />
        <path d="M15 5 5 15" />
        <motion.g variants={dropVariants} animate={controls} initial="normal">
          {dropPath.map((path) => (
            <motion.path
              variants={dropChildVariants}
              key={path.id}
              d={path.d}
            />
          ))}
        </motion.g>
      </svg>
    </div>
  );
};

export { ShowerHeadIcon };
