import React, { ReactNode } from 'react';
import { AnimatePresence, motion, AnimationProps } from 'framer-motion';

interface AnimationWrapperProps {
  children: ReactNode;
  keyValue: string | number;
  className?: string;
  initial?: AnimationProps['initial'];
  animate?: AnimationProps['animate'];
  transition?: AnimationProps['transition'];
}

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
  children,
  keyValue,
  className,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { duration: 1 },
}) => {
  return (
    <AnimatePresence>
      <motion.div
        key={keyValue}
        initial={initial}
        animate={animate}
        transition={transition}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimationWrapper;