import React from 'react';
import { Container, Image } from '@mantine/core';
import SearchImage from '@assets/images/policy/icon-search.png';
import MoneyImage from '@assets/images/policy/icon-money.png';
import TagImage from '@assets/images/policy/icon-tag.png';
import ProblemImage from '@assets/images/policy/problem.png';

const DATA = [
  {
    icon: SearchImage.src,
    text: 'Bạn đang tìm nguồn hàng để bắt đầu kinh doanh?',
  },
  {
    icon: TagImage.src,
    text: 'Bạn đã nhập hàng từ một vài nơi ở Việt Nam nhưng chất lượng hàng và giá nhập không được ưng ý?',
  },
  {
    icon: MoneyImage.src,
    text: 'Bạn đang nhập hàng từ Quảng Châu nhưng chi phí, chất lượng dịch vụ của đối tác chưa làm bạn hài lòng?',
  },
];

export const Problem = () => {
  return (
    <Container size="lg" className="flex w-full flex-col gap-5 pt-[20px] md:pt-[30px] lg:pt-[40px]">
      <h1 className="section-title">
        Bạn đang gặp
        <span className="block"> những khó khăn nào sau đây?</span>
      </h1>

      <div className="flex-responsive items-center justify-center">
        <div className="flex-responsive items-center gap-5">
          <div className="space-y-4">
            {DATA.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <Image src={item.icon} alt="icon" className="h-[30px] w-[30px]" />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <Image
            src={ProblemImage.src}
            alt="Confused person with question marks around their head"
            className="h-[200px] w-[200px]"
          />
        </div>
      </div>
    </Container>
  );
};
