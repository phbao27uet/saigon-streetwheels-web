import { IOptionTab, TabsCustom } from '@/components/shared/tabs';
import React from 'react';
import { PetFoodContent } from './components/PetFoodContent';

const DATA = [
  {
    tab: 'TRANSPORT',
    subtitle: 'Transport of PETFOOD',
    title: 'Transport',
    description:
      'We offer transport of semi-finished products, CAT 3 animal by-products, their remaining ingredients, as well as final products from manufacturers of animal food, dry and wet food and chews. We transport loose, fresh, frozen and liquid materials. We select the type of transport and vehicle fleet according to the client’s specific order. All transports have the necessary certificates and veterinary permits. Additionally, we help our clients transport other products, including neutral materials, to provide them with the greatest possible support in terms of transport and logistics.',
    image:
      'https://yourbestpartner.eu/wp-content/uploads/elementor/thumbs/img-666-6645f8b149d6f-qo8u2gvtu3a28z6wvfdg05kq03n5cx96s5wmndh55g.webp',
  },
  {
    tab: 'Supply chain design',
    subtitle: 'Supply chain design',
    title: 'Transport',
    description:
      'We offer comprehensive creation of supply chains, designed to meet the requirements of specific customers. We select optimal forms of transport, carriers and subcontractors. We set pickup and delivery times. We deal with documentation issues. We create procedures and take care of the turnover and management of containers and pallets. We create settlement methods with carriers, subcontractors, algorithms and methods for adjusting transport rates. We analyze all receipts, creating periodic reports and summaries for our clients. We monitor processes and propose changes so that the created supply chain can be constantly improved.',
    image:
      'https://yourbestpartner.eu/wp-content/uploads/elementor/thumbs/6-66466d58f24a5-1-qo9fqvdy19lbhzm2v9dknq0x5r4x28ef2ssbmqd55g.webp',
  },
  {
    tab: 'Tenders',
    subtitle: 'Transport of PETFOOD',
    title: 'Transport',
    description:
      'We offer transport of semi-finished products, CAT 3 animal by-products, their remaining ingredients, as well as final products from manufacturers of animal food, dry and wet food and chews. We transport loose, fresh, frozen and liquid materials. We select the type of transport and vehicle fleet according to the client’s specific order. All transports have the necessary certificates and veterinary permits. Additionally, we help our clients transport other products, including neutral materials, to provide them with the greatest possible support in terms of transport and logistics.',
    image:
      'https://yourbestpartner.eu/wp-content/uploads/elementor/thumbs/img-666-6645f8b149d6f-qo8u2gvtu3a28z6wvfdg05kq03n5cx96s5wmndh55g.webp',
  },
  {
    tab: 'Tailor-made solutions',
    subtitle: 'Supply chain design',
    title: 'Transport',
    description:
      'We offer comprehensive creation of supply chains, designed to meet the requirements of specific customers. We select optimal forms of transport, carriers and subcontractors. We set pickup and delivery times. We deal with documentation issues. We create procedures and take care of the turnover and management of containers and pallets. We create settlement methods with carriers, subcontractors, algorithms and methods for adjusting transport rates. We analyze all receipts, creating periodic reports and summaries for our clients. We monitor processes and propose changes so that the created supply chain can be constantly improved.',
    image:
      'https://yourbestpartner.eu/wp-content/uploads/elementor/thumbs/6-66466d58f24a5-1-qo9fqvdy19lbhzm2v9dknq0x5r4x28ef2ssbmqd55g.webp',
  },
  {
    tab: 'Consultations and Training',
    subtitle: 'Transport of PETFOOD',
    title: 'Transport',
    description:
      'We offer transport of semi-finished products, CAT 3 animal by-products, their remaining ingredients, as well as final products from manufacturers of animal food, dry and wet food and chews. We transport loose, fresh, frozen and liquid materials. We select the type of transport and vehicle fleet according to the client’s specific order. All transports have the necessary certificates and veterinary permits. Additionally, we help our clients transport other products, including neutral materials, to provide them with the greatest possible support in terms of transport and logistics.',
    image:
      'https://yourbestpartner.eu/wp-content/uploads/elementor/thumbs/img-666-6645f8b149d6f-qo8u2gvtu3a28z6wvfdg05kq03n5cx96s5wmndh55g.webp',
  },
  {
    tab: 'Container economy',
    subtitle: 'Transport of PETFOOD',
    title: 'Transport',
    description:
      'We offer transport of semi-finished products, CAT 3 animal by-products, their remaining ingredients, as well as final products from manufacturers of animal food, dry and wet food and chews. We transport loose, fresh, frozen and liquid materials. We select the type of transport and vehicle fleet according to the client’s specific order. All transports have the necessary certificates and veterinary permits. Additionally, we help our clients transport other products, including neutral materials, to provide them with the greatest possible support in terms of transport and logistics.',
    image:
      'https://yourbestpartner.eu/wp-content/uploads/elementor/thumbs/img-666-6645f8b149d6f-qo8u2gvtu3a28z6wvfdg05kq03n5cx96s5wmndh55g.webp',
  },
];

export const PetFoodTabs = () => {
  const transformData: IOptionTab[] = DATA.map(({ tab, ...content }) => ({
    title: tab,
    content: <PetFoodContent {...content} />,
  }));

  return (
    <div className="container mx-auto">
      <TabsCustom options={transformData} />
    </div>
  );
};
