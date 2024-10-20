import { Image } from '@mantine/core';
import React from 'react';
import { Step } from './Step';

export const Order = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="hidden md:block">
        <Image
          src="https://dathangquangchau.com/newdhqc/image-demo/step.png"
          className="w-full max-w-[735px] px-[50px] lg:pl-[65px]"
          alt="step"
        />

        <div className="flex gap-[35px] lg:gap-[70px]">
          <span className="text-sm">TIỀN HÀNG TRÊN WEB</span>
          <span className="text-sm">PHÍ SHIP TRUNG QUỐC</span>
          <span className="text-sm">PHÍ GIAO DỊCH</span>
          <span className="text-sm">CƯỚC VẬN CHUYỂN</span>
        </div>
      </div>

      <div className="flex flex-col md:hidden">
        <span className="text-sm">
          <span className="relative bottom-[2px] mr-[10px] inline-block h-[7px] w-[7px] rounded-full bg-[#fdd882]" />
          TIỀN HÀNG TRÊN WEB
        </span>
        <span className="text-sm">
          <span className="relative bottom-[2px] mr-[10px] inline-block h-[7px] w-[7px] rounded-full bg-[#fdd882]" />
          PHÍ SHIP TRUNG QUỐC
        </span>
        <span className="text-sm">
          <span className="relative bottom-[2px] mr-[10px] inline-block h-[7px] w-[7px] rounded-full bg-[#fdd882]" />
          PHÍ GIAO DỊCH
        </span>
        <span className="text-sm">
          <span className="relative bottom-[2px] mr-[10px] inline-block h-[7px] w-[7px] rounded-full bg-[#fdd882]" />
          CƯỚC VẬN CHUYỂN
        </span>
      </div>

      <div className="flex-responsive items-center">
        <div className="font-bold">Số tiền phải thanh toán =</div>
        <div className="ml-5 flex">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="relative mr-10 flex h-5 w-5 items-center justify-center rounded-full bg-[#fdd882] text-[#c1392b]"
            >
              {index + 1}

              {index !== 3 && <span className="absolute right-[-20px] text-[#222]">+</span>}
            </div>
          ))}
        </div>
      </div>

      <Step />
    </div>
  );
};
