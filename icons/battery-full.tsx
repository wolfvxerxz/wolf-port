'use client';

import { type Variants, motion, useAnimation } from 'motion/react';

const lineVariants: Variants = {
  initial: { opacity: 1 },
  fadeOut: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
  fadeIn: (i: number) => ({
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.4,
      ease: 'easeInOut',
    },
  }),
};

const BatteryFullIcon = () => {
  const controls = useAnimation();

  const handleHoverStart = async () => {
    await controls.start('fadeOut');
    controls.start('fadeIn');
  };

  const handleHoverEnd = () => {
    controls.start('initial');
  };

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <motion.svg
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
        <rect width="16" height="10" x="2" y="7" rx="2" ry="2" />
        <line x1="22" x2="22" y1="11" y2="13" />
        <motion.line
          x1="6"
          x2="6"
          y1="11"
          y2="13"
          variants={lineVariants}
          initial="initial"
          animate={controls}
          custom={0}
        />
        <motion.line
          x1="10"
          x2="10"
          y1="11"
          y2="13"
          variants={lineVariants}
          initial="initial"
          animate={controls}
          custom={1}
        />
        <motion.line
          x1="14"
          x2="14"
          y1="11"
          y2="13"
          variants={lineVariants}
          initial="initial"
          animate={controls}
          custom={2}
        />
      </motion.svg>
    </div>
  );
};

export { BatteryFullIcon };
