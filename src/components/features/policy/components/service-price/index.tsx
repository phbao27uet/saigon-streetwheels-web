import { Container } from '@mantine/core';
import React from 'react';
import { BoxPrice } from './components/BoxPrice';

export const ServicePrice = () => {
  return (
    <Container size="lg" className="flex w-full flex-col gap-5 pt-10">
      <div className="flex flex-col gap-2">
        <h1 className="section-title">Bảng giá dịch vụ</h1>
        <div>
          <p className="section-description">
            Bảng giá được công bố rõ ràng, công khai và nhất quán với hệ thống phần mềm.
          </p>
          <p className="section-description mb-10">Tuyệt đối không có giá ảo, chi phí phát sinh.</p>
        </div>
      </div>

      <div>
        <BoxPrice />
      </div>
    </Container>
  );
};
