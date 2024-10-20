'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
import styles from './styles.module.css';
import { ListOfferCard } from './components/ListOfferCard';

const DATA = [
  {
    image: 'https://yourbestpartner.eu/wp-content/uploads/2024/05/img-66698-66462d09b8d4b.webp',
    title: 'Food transport',
    subtitle: 'Work with experts to enjoy great results.',
  },
  {
    image: 'https://yourbestpartner.eu/wp-content/uploads/2024/05/img-022-6645f1e5d22f5.webp',
    title: 'Transport of animal food',
    subtitle:
      'Take the first step towards efficient, safe and well-thought-out logistics in your business.',
  },
  {
    image: 'https://yourbestpartner.eu/wp-content/uploads/2024/05/img-9-66437d05d04c5.webp',
    title: 'Local business',
    subtitle: 'Work with experts to enjoy great results.',
  },
];

const SlideContent = ({ item }: { item: (typeof DATA)[0] }) => (
  <div className={styles.slideWrapper}>
    <motion.div
      className={styles.background}
      style={{
        backgroundImage: `url(${item.image})`,
      }}
      initial={{ scale: 1 }}
      animate={{ scale: 1.1 }}
      transition={{ duration: 10, ease: 'easeOut' }}
    />
    <div className={styles.content}>
      <div
        className="absolute inset-0 bg-black opacity-[0.5] mix-blend-normal"
        style={{
          borderRadius: 'inherit',
        }}
      />
      <main className="z-10 flex max-w-[80%] flex-col items-center gap-5 pb-6 text-center text-white">
        <motion.h1
          className="text-[3rem] font-extrabold uppercase leading-none text-white lg:text-[4rem] xl:text-[clamp(4.75rem,3.3184rem+2.2346vw,6rem)]"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'linear' }}
        >
          {item.title}
        </motion.h1>
        <motion.p
          className="text-[clamp(1.125rem,0.8387rem+0.4469vw,1.375rem)] font-normal"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'linear' }}
        >
          {item.subtitle}
        </motion.p>
      </main>
    </div>
  </div>
);

export const Slide = () => {
  return (
    <>
      <div className="relative">
        <Swiper
          spaceBetween={30}
          loop
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          effect={'fade'}
          grabCursor
          modules={[EffectFade, Autoplay]}
        >
          <AnimatePresence mode="wait">
            {DATA.map((item, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => isActive && <SlideContent item={item} />}
              </SwiperSlide>
            ))}
          </AnimatePresence>
        </Swiper>

        <ListOfferCard />
      </div>
      <div className="h-[500px] md:h-0" />
    </>
  );
};
