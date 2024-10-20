'use client';

import React from 'react';
import { ModalsProvider as MantineModalsProvider } from '@mantine/modals';

interface Props {
  children: React.ReactNode;
}

const ModalsProvider = ({ children }: Props) => {
  return <MantineModalsProvider>{children}</MantineModalsProvider>;
};

export default ModalsProvider;
