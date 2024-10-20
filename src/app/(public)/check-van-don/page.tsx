import { TrackingNumber } from '@/components/features/tracking-number';
import React from 'react';

const TrackingNumberPage = async () => {
  return (
    <div className={`pt-[var(--app-shell-header-height)]`}>
      <TrackingNumber />
    </div>
  );
};

export default TrackingNumberPage;
