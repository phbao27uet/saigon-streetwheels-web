'use client';

import React from 'react';
import { tss } from '@/libs/utils/tss-style';
import { Container, Image } from '@mantine/core';
import { IconMail, IconPhone } from '@tabler/icons-react';
import Link from 'next/link';

interface IItem {
  label: string;
  href: string;
}

const MENU_ITEMS = [
  { label: 'Home', href: '#' },
  { label: 'Offer', href: '#' },
  { label: 'Contact', href: '#' },
];

const OTHER_ITEMS = [
  { label: 'Privacy policy', href: '#' },
  { label: 'Cookies policy', href: '#' },
  { label: 'Transport Conditions', href: '#' },
];

const CONTACT_INFO = [
  { icon: IconPhone, title: 'Call us', content: '+48 660-177-549' },
  { icon: IconMail, title: 'Send email', content: 'office@sota.com' },
];

const Footer = () => {
  return (
    <>
      <div className="bg-primary">
        <Container size="lg" className="py-8 md:py-12 lg:py-20">
          <div className="flex-responsive gap-8 md:gap-12">
            <CompanyInfo />
            <div className="grid grid-cols-1 gap-8 text-white sm:grid-cols-2 lg:flex-1 lg:grid-cols-3">
              <MenuSection title="Menu" items={MENU_ITEMS} />
              <MenuSection title="Other" items={OTHER_ITEMS} />
              <FastContact />
            </div>
          </div>
        </Container>
      </div>
      <Copyright />
    </>
  );
};

const CompanyInfo = () => (
  <div className="text-white">
    <Link href="/">
      <Image
        src="https://yourbestpartner.eu/wp-content/uploads/2024/04/logo_Y_B_PARTNER_light-1024x157.png"
        alt="logo"
        className="h-full md:h-[50px]"
      />
    </Link>
    <p className="mt-4 text-base font-bold sm:text-lg">YOUR PROVEN PARTNER IN LOGISTICS</p>
    <hr className="my-4 border-gray-500" />
    <p className="text-sm sm:text-base">Your Best Partner Sp. z o.o.</p>
    <p className="text-sm sm:text-base">NIP: 5588774411 KRS: 4444555222</p>
    <div className="mt-4 flex items-center">
      <i className="fas fa-map-marker-alt mr-2"></i>
      <p className="text-sm sm:text-base">Poland — Ul. Osiedlowa 1/6, 64-316 Kuślin</p>
    </div>
  </div>
);

const MenuSection = ({ title, items }: { title: string; items: IItem[] }) => {
  const { classes } = useStyles();
  return (
    <div>
      <p className="mb-4 text-base font-bold sm:text-lg">{title}</p>
      <hr className="my-4 w-[4rem] border-gray-500" />
      <ul>
        {items.map((item, index) => (
          <li key={index} className={classes.item}>
            <Link className={classes.item} href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FastContact = () => (
  <div>
    <p className="mb-4 text-base font-bold sm:text-lg">Fast contact</p>
    <hr className="my-4 w-[4rem] border-gray-500" />
    {CONTACT_INFO.map((info, index) => (
      <div key={index} className="mb-4 flex items-center justify-start gap-2">
        <info.icon size={30} className="sm:size-[35px] md:size-[40px]" />
        <div className="flex flex-col">
          <p className="text-sm sm:text-base">{info.title}</p>
          <p className="text-sm sm:text-base">{info.content}</p>
        </div>
      </div>
    ))}
  </div>
);

const Copyright = () => (
  <div className="bg-white">
    <Container size="lg" className="flex flex-col justify-between py-4 text-primary sm:flex-row">
      <p className="text-center text-xs sm:text-left">
        © 2021 Your Best Partner Sp. z o.o. All rights reserved.
      </p>
      <p className="mt-2 text-center text-xs sm:mt-0 sm:text-right">
        Made by{' '}
        <a href="https://t.me/Donki_hote" target="_blank" rel="noopener noreferrer">
          <b>Donkihote</b>
        </a>
      </p>
    </Container>
  </div>
);

const useStyles = tss.create({
  item: {
    color: 'white',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    transform: 'translateY(0px)',
    marginTop: '0.5rem',
    padding: '0.5rem 0',
    fontSize: '0.875rem',
    '@media (min-width: 640px)': {
      fontSize: '1rem',
    },
    '&:hover': {
      transform: 'translateY(8px)',
      color: '#455589',
    },
  },
});

export { Footer };
