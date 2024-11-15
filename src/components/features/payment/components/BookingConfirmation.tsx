'use client'

import { Section } from '@/components/shared/layouts'
import { Grid } from '@mantine/core'
import { useRouter } from 'nextjs-toploader/app'
import { useEffect } from 'react'
import { useTourBooking } from '../../tour/hooks'
import { CustomerInformation } from './CustomerInformation'
import { YourBasket } from './YourBasket'

export const BookingConfirmation = () => {
  const { booking, clearBooking, isExpired } = useTourBooking()
  const router = useRouter()

  useEffect(() => {
    // Redirect nếu không có booking hoặc đã hết hạn
    if (!booking || isExpired) {
      alert('No booking found')
      // router.replace('/our-tour')
    }
  }, [booking, isExpired])

  const handleConfirm = async () => {
    if (!booking) return

    try {
      // API call để lưu booking
      await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(booking),
      })

      clearBooking()
      router.push('/booking-success')
    } catch (error) {
      console.error('Booking failed:', error)
      // Xử lý lỗi
    }
  }

  if (!booking) return null

  return (
    <Section title="">
      <Grid className="">
        <Grid.Col
          span={{
            xs: 12,
            md: 6,
          }}
        >
          <YourBasket />
        </Grid.Col>
        <Grid.Col
          span={{
            xs: 12,
            md: 6,
          }}
        >
          <CustomerInformation />
        </Grid.Col>
      </Grid>
    </Section>
  )
}
