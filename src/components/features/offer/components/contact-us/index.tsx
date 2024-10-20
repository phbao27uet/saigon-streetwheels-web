import { ButtonCustom } from '@/components/shared/buttons';
import { IconArrowUpRight } from '@tabler/icons-react';
import React from 'react';

interface Props {
  bgUrl: string;
}

export const ContactUsOffer = ({ bgUrl }: Props) => {
  return (
    <div
      style={{
        backgroundImage: `url('${bgUrl}')`,
      }}
      className="relative max-h-[22rem] bg-cover bg-center bg-no-repeat md:bg-fixed"
    >
      <div className="absolute inset-0 bg-primary opacity-30" />
      <div className="max-w-[clamp(62.5rem, 41.7423rem + 32.4022vw, 80.625rem)] z-10 flex h-full min-h-[22rem] flex-col items-center justify-center text-[#F5F5F5]">
        <h1 className="z-10 mb-4 text-[40px] font-bold md:text-[3rem] lg:text-6xl">
          Contact us today
        </h1>
        <p className="z-10 mb-8 text-[clamp(0.875rem,0.5887rem+0.4469vw,1.125rem)]">
          Discover the full offer tailored to your needs.
        </p>

        <div className="mt-4">
          <ButtonCustom
            variant="transparent"
            className="w-fit"
            size="xl"
            rightSection={<IconArrowUpRight size={20} />}
          >
            I WANT TO KNOW MORE
          </ButtonCustom>
        </div>
      </div>
    </div>
  );
};
