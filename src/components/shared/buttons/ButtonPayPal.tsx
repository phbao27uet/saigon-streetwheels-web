'use client'

import { request } from '@/libs/requests'

import {
  PayPalButtons,
  type PayPalButtonsComponentProps,
} from '@paypal/react-paypal-js'
import { useRouter } from 'nextjs-toploader/app'
import { toast } from 'sonner'

interface Props extends PayPalButtonsComponentProps {
  cbApprove?: () => void
}

export const PayPalButton = ({ cbApprove, ...props }: Props) => {
  const router = useRouter()
  return (
    <PayPalButtons
      style={{
        shape: 'rect',
        color: 'gold', // change the default color of the buttons
        layout: 'vertical', //default value. Can be changed to horizontal
      }}
      // createOrder={async (data, actions) => {
      //   try {
      //     const res = await request.post('/bookings', {
      //       returnUrl: process.env.NEXT_PUBLIC_RETURN_URL,
      //       cancelUrl: process.env.NEXT_PUBLIC_CANCEL_URL,
      //       ...booking,
      //     })

      //     const orderData = await res.data
      //     console.log('orderData', orderData)

      //     if (orderData?.booking?.paypalOrderId) {
      //       console.log(
      //         'orderData.paypalOrderId',
      //         orderData.booking.paypalOrderId,
      //       )
      //       return orderData.booking.paypalOrderId
      //     }
      //     const errorDetail = orderData?.details?.[0]
      //     const errorMessage = errorDetail
      //       ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
      //       : JSON.stringify(orderData)

      //     throw new Error(errorMessage)
      //     // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      //   } catch (error: any) {
      //     console.error(error)
      //     toast.error(
      //       `Could not initiate PayPal Checkout...\n${error?.response?.data?.message}`,
      //     )
      //   }
      // }}
      onApprove={async (data, actions) => {
        try {
          console.log(data, actions)

          const res = await request.post(`/bookings/capture/${data.orderID}`)

          const orderData = res.data
          // Three cases to handle:
          //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
          //   (2) Other non-recoverable errors -> Show a failure message
          //   (3) Successful transaction -> Show confirmation or thank you message

          const errorDetail = orderData?.details?.[0]

          if (errorDetail?.issue === 'INSTRUMENT_DECLINED') {
            // (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
            // recoverable state, per https://developer.paypal.com/docs/checkout/standard/customize/handle-funding-failures/
            return actions.restart()
          }
          if (errorDetail) {
            // (2) Other non-recoverable errors -> Show a failure message
            throw new Error(
              `${errorDetail.description} (${orderData.debug_id})`,
            )
          }
          // (3) Successful transaction -> Show confirmation or thank you message
          // Or go to another URL:  actions.redirect('thank_you.html');
          // const transaction = orderData.purchase_units[0].payments.captures[0]
          // alert(
          //   `Transaction ${transaction.status}: ${transaction.id}. See console for all available details`,
          // )

          toast.success(
            'You have paid successfully, please check your email address.',
          )

          console.log(
            'Capture result',
            orderData,
            JSON.stringify(orderData, null, 2),
          )
          cbApprove?.()
          router.push('/our-tour')
        } catch (error) {
          console.error(error)
          alert(`Sorry, your transaction could not be processed...${error}`)
        }
      }}
      {...props}
    />
  )
}
