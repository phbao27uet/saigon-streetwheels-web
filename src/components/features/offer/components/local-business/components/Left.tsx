'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col gap-5"
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <Image
          src={'https://yourbestpartner.eu/wp-content/uploads/2024/05/13-66468c60866b7.webp'}
          alt="About us"
          width={500}
          height={500}
          priority
          className="h-auto w-full rounded-[30px] object-cover"
        />
      </motion.div>
      <div className="flex-responsive gap-5">
        <motion.div variants={itemVariants}>
          <Image
            src={'https://yourbestpartner.eu/wp-content/uploads/2024/05/12-66468c3e1e0a4.webp'}
            alt="About us"
            width={500}
            height={500}
            priority
            className="w-full rounded-[30px] object-cover"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Image
            src={'https://yourbestpartner.eu/wp-content/uploads/2024/05/14-66468d4a277ed.webp'}
            alt="About us"
            width={500}
            height={500}
            priority
            className="w-full rounded-[30px] object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
