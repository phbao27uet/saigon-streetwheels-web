import { Container } from '@mantine/core';
import React from 'react';
import { Right } from './components/Right';
import { Left } from './components/Left';

export const PetFood = () => {
  return (
    <Container
      size={'xl'}
      className="flex w-full flex-1 flex-col gap-5 pb-[80px] pt-[100px] lg:flex-row"
    >
      <div className="basis-6/12">
        <Left />
      </div>
      <div className="mt-8 basis-6/12 lg:mt-0">
        <Right />
      </div>
    </Container>
  );
};
