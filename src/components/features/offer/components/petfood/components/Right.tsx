'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CountUpCountries } from '../../CountUpCountries';
import { Image } from '@mantine/core';

export const Right = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="flex flex-col-reverse gap-5 md:flex-row" ref={ref}>
      <motion.div
        className="flex basis-6/12 flex-col justify-center gap-5"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <Image
            src={
              'https://yourbestpartner.eu/wp-content/uploads/elementor/thumbs/img-695-66462d9919472-qo93usplrm5772m1rns01tac9xks72yvz54w4dew8k.webp'
            }
            alt="About us"
            className="w-full rounded-[30px] object-cover"
          />
        </motion.div>

        <CountUpCountries />
      </motion.div>
      <div className="relative basis-6/12">
        <Image
          src={'https://yourbestpartner.eu/wp-content/uploads/2024/05/img-69-664629c54befc.webp'}
          alt="About us"
          className="h-full rounded-[30px] object-cover"
        />

        <div className="absolute left-1/2 top-[73%] flex w-[90%] -translate-x-1/2 items-center justify-center rounded-[30px] bg-[#F7F8FF8A] p-4">
          <Image
            src={
              'https://yourbestpartner.eu/wp-content/uploads/2024/05/logo-pets-dark-cmyk-664629c564430-1024x422.webp'
            }
            alt="About us"
            className="h-auto w-full rounded-[30px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};
