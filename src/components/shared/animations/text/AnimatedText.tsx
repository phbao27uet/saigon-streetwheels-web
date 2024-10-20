'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ClassNameValue, twMerge } from 'tailwind-merge';

interface Props {
  text: string;
  delay?: number;
  className?: ClassNameValue;
}

export const AnimatedText = ({ text, delay = 0.15, className }: Props) => {
  // Chia văn bản thành các từ, giữ nguyên khoảng trắng và dấu câu
  const words = text.split(/(\s+)/);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: delay, delayChildren: delay * i },
    }),
  };

  const wordVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: delay / 2 },
    },
  };

  const letter = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={twMerge('flex flex-wrap justify-center', className)}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={wordVariants} className="inline-block whitespace-pre">
          {Array.from(word).map((char, charIndex) => (
            <motion.span key={charIndex} variants={letter} className="inline-block">
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.div>
  );
};
