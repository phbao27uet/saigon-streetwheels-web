'use client';

import { mergeRefs } from '@mantine/hooks';
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react';
import { useCountUp } from 'react-countup';
import { motion, Variants } from 'framer-motion';
import { Image } from '@mantine/core';

export const CountUpCountries = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const countUpRef = React.useRef(null);
  const { pauseResume } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: 18,
    delay: 2000,
    duration: 5,
    smartEasingAmount: 0.5,
    suffix: '+',
  });

  useEffect(() => {
    if (inView) {
      pauseResume();
    }
  }, [inView, pauseResume]);

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.5,
      },
    },
  };

  return (
    <div className="relative p-5">
      <motion.div variants={itemVariants}>
        <Image
          src={'https://yourbestpartner.eu/wp-content/uploads/2024/05/icon-map-66462899cefa9.webp'}
          alt="About us"
          className="inline-block w-full rounded-[30px] object-cover align-middle"
        />
      </motion.div>
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 lg:top-[5px] lg:translate-y-0">
        <div className="flex items-center justify-center">
          <div
            className="text-[64px] font-semibold text-primary"
            ref={mergeRefs(ref, countUpRef)}
          />
        </div>
        <p className="text-nowrap text-[15px] font-extrabold uppercase text-primary">
          countries in Europe
        </p>
      </div>
    </div>
  );
};
