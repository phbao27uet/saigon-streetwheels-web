'use client';

import { Image } from '@mantine/core';
import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { twMerge } from 'tailwind-merge';

interface Props {
  rtl?: boolean;
  subtitle: string;
  title: string;
  description: string;
  image: string;
}

export const PetFoodContent = ({ rtl, description, image, subtitle, title }: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={twMerge(
        'transition-background flex min-h-[41.2rem] flex-col justify-center overflow-hidden rounded-[40px] p-3 shadow-[0_0_44px_-25px_rgba(0,0,0,0.5)] duration-300 md:p-[30px]',
        rtl ? 'items-end' : 'items-start',
      )}
    >
      <h2 className="text-[clamp(1rem,0.7137rem+0.4469vw,1.25rem)] font-semibold uppercase tracking-normal text-primary">
        {subtitle}
      </h2>
      <h1 className="text-[40px] font-bold uppercase text-primary md:text-[clamp(3.375rem,2.6592rem+1.1173vw,4rem)]">
        {title}
      </h1>
      <p className="mt-4 text-justify font-rubik text-[clamp(0.875rem,0.5887rem+0.4469vw,1.125rem)] text-[#7A7A7A]">
        {description}
      </p>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="mt-10 w-full"
      >
        <Image
          src={image}
          alt={title}
          className="aspect-[16/9] h-auto w-full rounded-[30px] border-none shadow-none"
        />
      </motion.div>
    </div>
  );
};
