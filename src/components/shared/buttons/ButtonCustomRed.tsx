'use client';

import React, { ButtonHTMLAttributes, CSSProperties, PropsWithChildren } from 'react';
import { Button, ButtonProps, ButtonVariant } from '@mantine/core';
import { tss } from '@libs/utils/tss-style';

type ButtonAttributes = Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonProps>;

interface Props extends ButtonProps, ButtonAttributes {}

const cssDefault = {
  gradientBorderRefill: {
    background: '#fff',
    border: '2px solid #c1392d',
  },
  color: '#c1392d',
};

const cssByVariant: Record<
  ButtonVariant,
  {
    gradientBorderRefill?: CSSProperties;
    color: string;
  }
> = {
  outline: {
    color: '#c1392d',
    gradientBorderRefill: {
      background: '#fff',
      border: '2px solid #c1392d',
    },
  },
  transparent: {
    gradientBorderRefill: {
      background: 'transparent',
      borderBottom: '2px solid #fff',
      borderRadius: '0 !important',
    },
    color: '#fff',
  },
  default: {
    gradientBorderRefill: {
      background: '#fff',
      border: '2px solid #c1392d',
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

export const ButtonCustomRed = ({ children, className, ...props }: PropsWithChildren<Props>) => {
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
      transition: 'all 0.3s ease',
      textTransform: 'uppercase',
      position: 'relative',
      borderRadius: '20px',

      '&:hover': {
        transform: 'translateY(-8px)',
        background: variant === 'outline' ? '#fff' : 'transparent',
        color: variant === 'outline' ? '#c1392d' : '#fff',
        borderColor: variant === 'outline' ? '#c1392d' : '#fff',
      },
    },

    gradientBorderRefill: {
      ...gradientBorderRefill,
    },
  };
});
