import { PolicyPage } from '@/components/features/policy';
import React from 'react';

const Policy = async () => {
  return (
    <div className="flex flex-col bg-transparent pt-[var(--app-shell-header-height)]">
      <PolicyPage />
    </div>
  );
};

export default Policy;
