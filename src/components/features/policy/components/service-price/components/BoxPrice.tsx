import React from 'react';
import { Section } from './Section';
import { Order } from './order';

export const BoxPrice = () => {
  return (
    <div className="mb-[60px] shadow-[0_0_15px_0px_#ccc]">
      <Section title="BÁO GIÁ ORDER" subtitle="(ĐHQC mua, kiểm hàng, vận chuyển về VN)">
        <Order />
      </Section>
    </div>
  );
};
