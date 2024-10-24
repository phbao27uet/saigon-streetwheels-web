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
    background:
      'linear-gradient(#C50F18 0 0) padding-box, linear-gradient(#C50F18 0 0) border-box',
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
    color: '#C50F18',
    gradientBorderRefill: {
      background:
        'linear-gradient(#fff 0 0) padding-box, linear-gradient(#C50F18 0 0) border-box',
      border: '2px solid transparent',
    },
  },
  transparent: {
    gradientBorderRefill: {
      background: 'transparent',
      border: '2px solid #fff',
      borderRadius: '50px',
    },
    color: '#fff',
  },
  default: {
    gradientBorderRefill: {
      background:
        'linear-gradient( 0 0) padding-box, linear-gradient(138deg, #7B070C 0%, #B4B4B4 100%) border-box',
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
}

export const ButtonCustom = ({
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
    }
  })
