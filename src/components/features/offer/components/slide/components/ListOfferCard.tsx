import { Container } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import PinSvg from '@assets/svgs/offer/pin.svg';
import PetSvg from '@assets/svgs/offer/pet.svg';
import FoodSvg from '@assets/svgs/offer/food.svg';
import styles from '../styles.module.css';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  icon: string;
  title: string;
}

const CARDS: CardProps[] = [
  {
    icon: PetSvg.src,
    title: 'Transport of petfood',
  },
  {
    icon: FoodSvg.src,
    title: 'Food transport',
  },
  {
    icon: PinSvg.src,
    title: 'Local business',
  },
];

const Card = ({ icon, title }: CardProps) => {
  return (
    <div className="transition-background flex w-full flex-col gap-5 rounded-[30px] bg-[#fff] p-[30px_20px] text-center shadow-[0px_0px_52.2px_-17px_rgba(0,0,0,0.5)] duration-300">
      <div className="flex h-[96px] w-[96px] items-center justify-center self-center rounded-[50%] bg-primary">
        <Image src={icon} alt={title} width={48} height={48} priority />
      </div>
      <div className={`mb-[27px] text-xl font-semibold text-primary`}>{title}</div>
    </div>
  );
};

export const ListOfferCard = () => {
  return (
    <Container
      size={'lg'}
      className={twMerge(
        'flex-responsive absolute bottom-[-75%] left-0 right-0 z-10 justify-center gap-5 px-2 md:bottom-[-50px] md:gap-[50px]',
        styles.fadeInUp,
      )}
    >
      {CARDS.map((offer) => (
        <Card key={offer.title} {...offer} />
      ))}
    </Container>
  );
};
