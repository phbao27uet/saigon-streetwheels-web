import React from 'react';
import styles from './styles.module.css';

export const Introduction = () => {
  return (
    <div className={styles.background}>
      <main className="z-10 flex flex-col items-center gap-5 p-4 text-center text-white sm:p-8">
        <p className="text-[clamp(1rem,0.7137rem+0.4469vw,1.25rem)] uppercase tracking-[5px]">
          your best partner
        </p>
        <h1 className="text-4xl font-extrabold capitalize leading-none text-white md:text-[clamp(4.75rem,3.3184rem+2.2346vw,6rem)]">
          documents
        </h1>
      </main>
    </div>
  );
};
