import React from 'react';
import { Introduction, ServicePrice } from './components';
import { ContactUs } from '../introduction/components';

export const PolicyPage = () => {
  return (
    <div className="flex flex-col gap-5 bg-white">
      <Introduction />
      {/* <Problem />
      <ListServices /> */}
      <ServicePrice />
      <ContactUs />
    </div>
  );
};
