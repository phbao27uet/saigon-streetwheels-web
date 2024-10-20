import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  index: number;
  title: string;
  subtitle?: string;
  className?: string;
}

export const TitleStep = ({ index, title, subtitle, className }: Props) => {
  return (
    <div className={twMerge('mb-4 flex items-center gap-2', className)}>
      <span className="flex h-5 w-5 min-w-[1.25rem] items-center justify-center rounded-full bg-[#c1392b] text-xs text-white">
        {index}
      </span>
      <p className="text-[15px]">
        {title}
        {subtitle ? <span className="ml-1 text-green-600">(đã bao gồm kiểm hàng)</span> : null}
      </p>
    </div>
  );
};
