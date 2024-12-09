'use client'

import { PayPalButton } from '@/components/shared/buttons/ButtonPayPal'
import { request } from '@/libs/requests'
import { zodResolver } from '@hookform/resolvers/zod'
import { Checkbox, TextInput } from '@mantine/core'
import { IconLock, IconUser } from '@tabler/icons-react'
import { useRouter } from 'nextjs-toploader/app'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { useTourBooking } from '../../tour/hooks'
import {
  type CustomerInformationSchema,
  customerInformationSchema,
} from '../schemas'

export const CustomerInformation = () => {
  const { clearBooking, booking } = useTourBooking()

  const [checked, setChecked] = useState(false)
  const [checkedNewsletter, setCheckedNewsletter] = useState(false)
  const router = useRouter()

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<CustomerInformationSchema>({
    resolver: zodResolver(customerInformationSchema),
    mode: 'onChange', // Kích hoạt validation ngay khi giá trị thay đổi
  })

  if (!booking) return <div>No booking</div>

  const totalPrice = booking.ticketTypes.reduce((acc, ticket) => {
    return acc + ticket.price * ticket.quantity
  }, 0)

  const handleSubmitForm = handleSubmit((data) => {
    return data
  })

  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold text-3xl">CUSTOMER INFORMATION</p>
      <p className="text-sm">
        You're almost done with your booking! Please enter the details of the
        person responsible for the booking and select desired method of payment.
      </p>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-[#c80d17] p-2 rounded-full">
              <IconUser size={24} color="white" />
            </div>
            <p className="text-xl">Responsible for payment</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <TextInput
                size="xl"
                color="red"
                {...register('bookerName')}
                placeholder="Full name"
                error={errors.bookerName?.message}
              />
            </div>
            <div>
              <TextInput
                type="tel"
                size="xl"
                color="red"
                {...register('bookerPhoneNumber')}
                placeholder="Phone Number"
                error={errors.bookerPhoneNumber?.message}
              />
            </div>
            <div>
              <TextInput
                type="tel"
                size="xl"
                color="red"
                {...register('bookerPhoneNumber2')}
                placeholder="2nd Phone Number"
                error={errors.bookerPhoneNumber2?.message}
              />
            </div>
            <div>
              <TextInput
                size="xl"
                color="red"
                {...register('bookerAddress')}
                placeholder="Address to pick up"
                error={errors.bookerAddress?.message}
              />
            </div>
            <div>
              <TextInput
                size="xl"
                color="red"
                {...register('bookerEmail')}
                placeholder="Email"
                error={errors.bookerEmail?.message}
              />
            </div>
            <div>
              <TextInput
                size="xl"
                color="red"
                {...register('bookerNote')}
                placeholder="Note"
                error={errors.bookerNote?.message}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-[#c80d17] p-2 rounded-full">
              <IconLock size={24} color="white" />
            </div>
            <p className="text-xl">Secure Payment</p>
          </div>

          <PayPalButton
            disabled={!checked}
            cbApprove={() => {
              clearBooking()
            }}
            createOrder={async () => {
              try {
                await handleSubmitForm()

                const dataForm = {
                  tourId: booking?.tourId,
                  bookerName: watch().bookerName || '',
                  bookerPhoneNumber: watch().bookerPhoneNumber || '',
                  bookerPhoneNumber2: watch().bookerPhoneNumber2 || '',
                  bookerAddress: watch().bookerAddress || '',
                  bookerEmail: watch().bookerEmail || '',
                  bookerNote: watch().bookerNote || '',
                  totalPrice: totalPrice,
                  timeId: booking?.timeId,
                  bookingDetails: booking.ticketTypes.map((ticket) => ({
                    quantity: ticket.quantity,
                    ticketTypeId: ticket.id,
                  })),
                }

                const res = await request.post('/bookings', {
                  returnUrl: process.env.NEXT_PUBLIC_RETURN_URL,
                  cancelUrl: process.env.NEXT_PUBLIC_CANCEL_URL,
                  ...dataForm,
                })

                const orderData = await res.data
                console.log('orderData', orderData)

                if (orderData?.booking?.paypalOrderId) {
                  return orderData.booking.paypalOrderId
                }
                const errorDetail = orderData?.details?.[0]
                const errorMessage = errorDetail
                  ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
                  : JSON.stringify(orderData)

                throw new Error(errorMessage)
                // biome-ignore lint/suspicious/noExplicitAny: <explanation>
              } catch (error: any) {
                console.error(error)
                toast.error(
                  `Could not initiate PayPal Checkout...\n${error?.response?.data?.message}`,
                )
              }
            }}
            onCancel={async (data) => {
              try {
                await request.put(`/bookings/${data?.orderID}/cancel`)
                toast.success('Booking cancelled successfully')
                router.push('/our-tour')
              } catch (error) {
                console.error(error)
                toast.error('Cannot cancel booking')
              }
            }}
            onClick={async (data) => {
              await handleSubmitForm()
            }}
          />
        </div>

        <div className="flex flex-col gap-4">
          <Checkbox
            label={
              <p className="text-base font-bold">
                I hereby certify that I have read and agree to{' '}
                <span className="text-[#F81818]">
                  Lu Phong terms and conditions including refund and
                  cancellation policy
                </span>{' '}
                and that I have read{' '}
                <span className="text-[#F81818]">Lu Phong privacy policy.</span>
              </p>
            }
            color="red"
            checked={checked}
            onChange={(event) => setChecked(event.currentTarget.checked)}
          />
          <Checkbox
            label={
              "Yes, I would like to receive Stromma's newsletter (in Swedish)"
            }
            color="red"
            checked={checkedNewsletter}
            onChange={(event) =>
              setCheckedNewsletter(event.currentTarget.checked)
            }
          />
        </div>
      </div>

      <div className="flex justify-end">
        <p className="text-xl font-bold">
          TOTAL PRICE INCLUDING TAX:{' '}
          <span className="text-[#F81818]">{totalPrice} USD</span>
        </p>
      </div>
    </div>
  )
}
