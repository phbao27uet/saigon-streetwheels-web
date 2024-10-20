'use client';

import React from 'react';
import { Image } from '@mantine/core';
import { Rubik } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export const Right = () => {
  return (
    <div className="relative flex flex-col gap-5 px-3 pt-4">
      <p className="text-[18px] font-semibold uppercase text-primary">Local business</p>
      <div className="flex flex-col gap-0">
        <h2 className="text-[40px] leading-none text-primary md:text-[4rem] lg:text-7xl">
          <b>We believe in close</b> local cooperation.
        </h2>
      </div>
      <p className={twMerge('mb-4 text-justify font-rubik', rubik.className)}>
        We are perfectly aware of the effort you have to devote every day to develop your
        businesses. We want to help with this, transport products for you on fair terms, learn with
        you, be with you, develop our local business with you.
      </p>

      <Image
        srcSet={
          'https://yourbestpartner.eu/wp-content/uploads/2024/05/design-element-2-1-1-6634b76e5b69c.webp 726w, https://yourbestpartner.eu/wp-content/uploads/2024/05/design-element-2-1-1-6634b76e5b69c-300x74.webp 300w'
        }
        alt="Our philosophy"
        className="absolute bottom-0 right-0 h-[110px] translate-y-[80%] object-contain"
      />
    </div>
  );
};
