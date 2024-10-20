import { IOptionTab, TabsCustom } from '@/components/shared/tabs';
import React from 'react';
import { LocalBusinessContent } from './components/LocalBusinessContent';

const DATA = [
  {
    tab: 'TRANSPORT',
    subtitle: 'Local business',
    title: 'Full-truck transport',
    description:
      'We offer a comprehensive delivery service for goods of various sizes and weights. We price each transport individually, look for the optimal solution and select the appropriate means of transport. Everything is based on transparent and partnership principles. We deliver the goods in the shortest possible time, directly to you, from every corner of Poland and Europe. We take care of your goods because we know how important they are for your business. We select appropriate routes, check the location regularly, and additionally provide insurance.',
    image: 'https://yourbestpartner.eu/wp-content/uploads/2024/05/15-66468d4a152fa.webp',
  },
  {
    tab: 'Supply chain design',
    subtitle: 'Local business',
    title: 'Full-truck transport',
    description:
      'We offer a comprehensive delivery service for goods of various sizes and weights. We price each transport individually, look for the optimal solution and select the appropriate means of transport. Everything is based on transparent and partnership principles. We deliver the goods in the shortest possible time, directly to you, from every corner of Poland and Europe. We take care of your goods because we know how important they are for your business. We select appropriate routes, check the location regularly, and additionally provide insurance.',
    image: 'https://yourbestpartner.eu/wp-content/uploads/2024/05/15-66468d4a152fa.webp',
  },
  {
    tab: 'Tenders',
    subtitle: 'Local business',
    title: 'Transport',
    description:
      'We offer transport of semi-finished products, CAT 3 animal by-products, their remaining ingredients, as well as final products from manufacturers of animal food, dry and wet food and chews. We transport loose, fresh, frozen and liquid materials. We select the type of transport and vehicle fleet according to the client’s specific order. All transports have the necessary certificates and veterinary permits. Additionally, we help our clients transport other products, including neutral materials, to provide them with the greatest possible support in terms of transport and logistics.',
    image: 'https://yourbestpartner.eu/wp-content/uploads/2024/05/15-66468d4a152fa.webp',
  },
  {
    tab: 'Tailor-made solutions',
    subtitle: 'Local business',
    title: 'Transport',
    description:
      'We offer comprehensive creation of supply chains, designed to meet the requirements of specific customers. We select optimal forms of transport, carriers and subcontractors. We set pickup and delivery times. We deal with documentation issues. We create procedures and take care of the turnover and management of containers and pallets. We create settlement methods with carriers, subcontractors, algorithms and methods for adjusting transport rates. We analyze all receipts, creating periodic reports and summaries for our clients. We monitor processes and propose changes so that the created supply chain can be constantly improved.',
    image: 'https://yourbestpartner.eu/wp-content/uploads/2024/05/15-66468d4a152fa.webp',
  },
];

export const LocalBusinessTabs = () => {
  const transformData: IOptionTab[] = DATA.map(({ tab, ...content }) => ({
    title: tab,
    content: <LocalBusinessContent {...content} />,
  }));

  return (
    <div className="container mx-auto">
      <TabsCustom placement="top" options={transformData} />
    </div>
  );
};
