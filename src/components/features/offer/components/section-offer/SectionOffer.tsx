import { ButtonCustom } from '@/components/shared/buttons';
import { Container } from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons-react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  rtl?: boolean;
}

export const SectionOffer = ({ rtl }: Props) => {
  return (
    <div className="container mx-auto w-full rounded-[30px] bg-primary">
      <Container
        size={'lg'}
        className={twMerge(
          'flex w-full flex-col items-center pb-14 pt-10 lg:justify-between',
          rtl ? 'items-end lg:flex-row-reverse' : 'items-start lg:flex-row',
        )}
      >
        <div className={twMerge('flex flex-col text-white', rtl ? 'items-end' : 'items-start')}>
          <h2 className="text-base font-semibold">OFFER</h2>
          <h1
            className={twMerge(
              'mt-2 text-[40px] font-bold leading-none md:text-6xl',
              rtl ? 'text-right' : 'text-left',
            )}
          >
            Get to know our offer
          </h1>
          <p className={twMerge('mt-4 font-rubik text-base', rtl ? 'text-right' : 'text-left')}>
            Let us be your strategic partner in providing efficient logistics tailored to your
            needs.
          </p>
        </div>

        <ButtonCustom
          variant="transparent"
          className="w-fit"
          size="xl"
          rightSection={<IconArrowUpRight size={20} />}
        >
          CONTACT US
        </ButtonCustom>
      </Container>
    </div>
  );
};
