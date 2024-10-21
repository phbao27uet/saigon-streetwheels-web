'use client'

import { tss } from '@libs/utils/tss-style'
import { Button, type ButtonProps, type ButtonVariant } from '@mantine/core'
import type {
  ButtonHTMLAttributes,
  CSSProperties,
  PropsWithChildren,
} from 'react'

type ButtonAttributes = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  keyof ButtonProps
>

interface Props extends ButtonProps, ButtonAttributes {}

const cssDefault = {
  gradientBorderRefill: {
    background: '#2aa73c',
    border: '2px solid transparent',
  },
  color: '#fff',
}

const cssByVariant: Record<
  ButtonVariant,
  {
    gradientBorderRefill?: CSSProperties
    color: string
  }
> = {
  outline: {
    color: '#2aa73c',
    gradientBorderRefill: {
      background: '#fff',
      border: '2px solid #2aa73c',
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
      border: '2px solid #2aa73c',
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
}

export const ButtonCustomGreen = ({
  children,
  className,
  ...props
}: PropsWithChildren<Props>) => {
  const { classes, cx } = useStyles({
    variant: props.variant as ButtonVariant | undefined,
  })

  return (
    <Button
      className={cx(classes.button, classes.gradientBorderRefill, className)}
      {...props}
    >
      {children}
    </Button>
  )
}

const useStyles = tss
  .withParams<{ variant: ButtonVariant | undefined }>()
  .create(({ variant }) => {
    const color = (variant && cssByVariant[variant].color) || cssDefault.color
    const gradientBorderRefill =
      (variant && cssByVariant[variant].gradientBorderRefill) ||
      cssDefault.gradientBorderRefill

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
          color: color,
          background: '#2aa73c',
        },
      },

      gradientBorderRefill: {
        ...gradientBorderRefill,
      },
    }
  })
