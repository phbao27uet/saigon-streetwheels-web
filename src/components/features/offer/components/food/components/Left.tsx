'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CountUpCountries } from '../../CountUpCountries';
import { Image } from '@mantine/core';

export const Left = () => {
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
    <div className="flex flex-col-reverse gap-5 md:flex-row-reverse" ref={ref}>
      <motion.div
        className="flex basis-6/12 flex-col justify-center gap-5"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <Image
            src={
              'https://yourbestpartner.eu/wp-content/uploads/elementor/thumbs/img-666988655955-664659e347fa1-qo9c2wt8rpi2oqhno5ny1l8x8s2i2fir0rqjrgd22c.webp'
            }
            alt="About us"
            className="w-full rounded-[30px] object-cover"
          />
        </motion.div>

        <CountUpCountries />
      </motion.div>
      <div className="relative basis-6/12">
        <Image
          src={
            'https://yourbestpartner.eu/wp-content/uploads/elementor/thumbs/img-66698865595-664659e347fc7-qo9c2xr14re232b92lfy27gyskjs7ne0adby0qobdm.webp'
          }
          alt="About us"
          className="h-full rounded-[30px] object-cover"
        />
      </div>
    </div>
  );
};
