'use client';

import React, { ButtonHTMLAttributes, CSSProperties, PropsWithChildren } from 'react';
import { Button, ButtonProps, ButtonVariant } from '@mantine/core';
import { tss } from '@libs/utils/tss-style';

type ButtonAttributes = Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonProps>;

interface Props extends ButtonProps, ButtonAttributes {}

const cssDefault = {
  gradientBorderRefill: {
    background: `linear-gradient(#1B264A 0 0) padding-box, linear-gradient(138deg, #455589 0%, #B4B4B4 100%) border-box`,
    border: '2px solid transparent',
  },
  color: '#fff',
};

const cssByVariant: Record<
  ButtonVariant,
  {
    gradientBorderRefill?: CSSProperties;
    color: string;
  }
> = {
  outline: {
    color: '#1B264A',
    gradientBorderRefill: {
      background: `linear-gradient(#fff 0 0) padding-box, linear-gradient(138deg, #455589 0%, #B4B4B4 100%) border-box`,
      border: '2px solid transparent',
    },
  },
  transparent: {
    gradientBorderRefill: {
      background: `transparent`,
      borderBottom: '2px solid #fff',
      borderRadius: '0 !important',
    },
    color: '#fff',
  },
  default: {
    gradientBorderRefill: {
      background: `linear-gradient(#1B264A 0 0) padding-box, linear-gradient(138deg, #455589 0%, #B4B4B4 100%) border-box`,
      border: '2px solid transparent',
    },
    color: '#fff',
  },
  filled: {
    gradientBorderRefill: undefined,
    color: '',
  },
  light: {
    gradientBorderRefill: undefined,
    color: '',
  },
  white: {
    gradientBorderRefill: undefined,
    color: '',
  },
  subtle: {
    gradientBorderRefill: undefined,
    color: '',
  },
  gradient: {
    gradientBorderRefill: undefined,
    color: '',
  },
};

export const ButtonCustom = ({ children, className, ...props }: PropsWithChildren<Props>) => {
  const { classes, cx } = useStyles({
    variant: props.variant as ButtonVariant | undefined,
  });

  return (
    <Button className={cx(classes.button, classes.gradientBorderRefill, className)} {...props}>
      {children}
    </Button>
  );
};

const useStyles = tss.withParams<{ variant: ButtonVariant | undefined }>().create(({ variant }) => {
  const color = (variant && cssByVariant[variant].color) || cssDefault.color;
  const gradientBorderRefill =
    (variant && cssByVariant[variant].gradientBorderRefill) || cssDefault.gradientBorderRefill;

  return {
    button: {
      color: color,
      fontSize: 'clamp(0.6875rem, 0.4012rem + 0.4469vw, 0.9375rem)',
      fontWeight: 600,
      transition: 'transform 0.3s ease',
      textTransform: 'uppercase',
      position: 'relative',
      borderRadius: '20px',

      '&:hover': {
        transform: 'translateY(-8px)',
        color: color,
      },
    },

    gradientBorderRefill: {
      ...gradientBorderRefill,
    },
  };
});
