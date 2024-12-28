'use client'

import {
  PayPalScriptProvider,
  type ReactPayPalScriptOptions,
} from '@paypal/react-paypal-js'
import type React from 'react'

interface Props {
  children: React.ReactNode
}

const initialOptions: ReactPayPalScriptOptions = {
  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'sb',
  enableFunding: 'paylater,venmo',
  dataSdkIntegrationSource: 'integrationbuilder_sc',
  currency: 'USD',
}

const PayPalProvider = ({ children }: Props) => {
  console.log('initialOptions', initialOptions)

  return (
    <PayPalScriptProvider options={initialOptions}>
      {children}
    </PayPalScriptProvider>
  )
}

export default PayPalProvider
