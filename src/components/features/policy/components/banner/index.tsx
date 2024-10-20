import React from 'react';
import styles from './styles.module.css';
import { ButtonCustomRed } from '@/components/shared/buttons';
import BannerImg from '@assets/images/dat-hang.png';
import { Image } from '@mantine/core';

export const Banner = () => {
  return (
    <div className={styles.background}>
      <div className="h-[64px]" />
      <h1 className="section-title-white text-center">
        Đặt Hàng Quảng Châu
        <span className="block"> Đặt Hàng Taobao, Đặt hàng 1688 về Việt Nam</span>
      </h1>
      <div className="section-description-white">
        Với hơn 8 năm kinh nghiệm, <b>3000+</b> shop đã chọn chúng tôi là đối tác nhập hàng
      </div>
      <ButtonCustomRed size="xl">ĐẶT HÀNG NGAY</ButtonCustomRed>

      <div>
        <Image src={BannerImg.src} className="w-full opacity-30" alt="banner" />
      </div>
    </div>
  );
};
