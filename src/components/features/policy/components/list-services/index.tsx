import { Image } from '@mantine/core';
import { Container } from '@mantine/core';
import React from 'react';

const DATA = [
  {
    icon: 'https://dathangquangchau.com/newdhqc/image-demo/order.png',
    title: 'ORDER HÀNG',
    description:
      'Tiếp cận nguồn hàng phong phú giá sỉ trên các web hàng Trung Quốc như taobao.com, tmall.com, 1688.com.',
  },
  {
    icon: 'https://dathangquangchau.com/newdhqc/image-demo/guihang.png',
    title: 'KÝ GỬI HÀNG',
    description:
      'Chuyển hàng ký gửi với tốc độ ổn định, nhanh chóng. Bạn sẽ nhận được thông báo ngay khi hàng về Việt Nam.',
  },
  {
    icon: 'https://dathangquangchau.com/newdhqc/image-demo/doitien.png',
    title: 'CHUYỂN TIỀN',
    description:
      'Chuyển tiền với tỷ giá và phí rẻ nhất thị trường, chỉ sau 5 phút là nhận được tiền.',
  },
];

export const ListServices = () => {
  return (
    <Container size="lg" className="flex w-full flex-col gap-5 pt-10">
      <div className="flex flex-col gap-2">
        <h1 className="section-title">CHÚNG TÔI SẼ GIẢI QUYẾT VẤN ĐỀ CỦA BẠN</h1>
        <p className="section-description mb-10">
          Với các dịch vụ Order Hàng, Chuyển Hàng Ký Gửi, Chuyển Tiền.
        </p>
      </div>

      <div className="flex-responsive items-center justify-center gap-10">
        {DATA.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <div className="mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-orange-500">
              <Image src={item.icon} className="h-auto w-[150px] object-cover" alt="Order icon" />
            </div>
            <h2 className="mb-2 text-base font-semibold uppercase">{item.title}</h2>
            <p className="text-center text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};
