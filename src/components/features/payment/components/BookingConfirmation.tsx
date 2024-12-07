'use client'

import { ButtonCustomGreen } from '@/components/shared'
import { Section } from '@/components/shared/layouts'
import { Grid } from '@mantine/core'
import { useRouter } from 'nextjs-toploader/app'
import { Suspense } from 'react'
import { useTourBooking } from '../../tour/hooks'
import { CustomerInformation } from './CustomerInformation'
import { YourBasket } from './YourBasket'

export const BookingConfirmation = () => {
  const { booking, isExpired, clearBooking } = useTourBooking()
  const router = useRouter()

  if (isExpired) {
    return (
      <div className="mt-6 flex items-center flex-col min-h-svh">
        <p className="text-xl">Tour expired, please try again.</p>
        <ButtonCustomGreen
          className="mt-4"
          onClick={() => {
            clearBooking()
            router.push('/our-tour')
          }}
        >
          Go back to choose tour
        </ButtonCustomGreen>
      </div>
    )
  }

  if (!booking) {
    return (
      <div className="mt-6 flex items-center flex-col min-h-svh">
        <p className="text-xl">
          No booking found. Please go back to choose tour.
        </p>
        <ButtonCustomGreen
          className="mt-4"
          onClick={() => router.push('/our-tour')}
        >
          Go back to choose tour
        </ButtonCustomGreen>
      </div>
    )
  }

  return (
    <Section title="">
      <Grid gutter="xl">
        <Grid.Col
          span={{
            xs: 12,
            md: 3,
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <YourBasket />
          </Suspense>
        </Grid.Col>
        <Grid.Col
          span={{
            xs: 12,
            md: 9,
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <CustomerInformation />
          </Suspense>
        </Grid.Col>
      </Grid>
    </Section>
  )
}
