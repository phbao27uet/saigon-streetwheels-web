import React, { PropsWithChildren } from 'react';
import styles from './styles.module.css';

interface Props {
  title: string;
  subtitle: string;
}

export const Section = ({ title, subtitle, children }: PropsWithChildren<Props>) => {
  return (
    <div>
      <h3 className={styles.title}>
        {title}
        <span className="block text-[10px] md:ml-3 md:inline md:text-sm">{subtitle}</span>
      </h3>
      <div className="p-[20px] md:p-[30px]">{children}</div>
    </div>
  );
};
