'use client';

import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import './style.css';
import { ButtonCustom } from '@/components/shared/buttons';
import { IconSearch } from '@tabler/icons-react';
import { Loader } from '@mantine/core';

export const TrackingNumber = () => {
  const [trackingNumber, setTrackingNumber] = useState('773312314469851');
  const [result, setResult] = useState('');

  const { isPending, mutate } = useMutation({
    mutationKey: ['trackingNumber', trackingNumber],
    mutationFn: async ({ trackingNumber }: { trackingNumber: string }) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/ma-van-don/?num=${trackingNumber}`,
      );

      return res;
    },
    async onSuccess(data) {
      const res = await data.json();
      const html = res.html as string;
      const array = html.split('<div id="trackingContent">');
      const array2 = array[1].split('</section>');

      setResult(`<div id="trackingContent"> ${array2[0]}`);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({
      trackingNumber,
    });
  };

  return (
    <div className="container mb-[60px] flex flex-col gap-5">
      <div className="rounded-xl pt-5 md:max-w-6xl md:p-6">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">Tra cứu vận đơn</h1>
        <form onSubmit={handleSubmit} className="md:mb-6">
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder="Nhập mã vận đơn"
              className="w-full max-w-md flex-grow self-stretch rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <ButtonCustom
              size="lg"
              rightSection={
                isPending ? <Loader size={24} color="gray" /> : <IconSearch size={24} />
              }
              type="submit"
            >
              {isPending ? 'Đang tìm kiếm...' : 'Tra cứu'}
            </ButtonCustom>
          </div>
        </form>
      </div>

      {result && (
        <div
          dangerouslySetInnerHTML={{
            __html: result,
          }}
          className="rounded-md md:p-6"
        />
      )}
    </div>
  );
};
