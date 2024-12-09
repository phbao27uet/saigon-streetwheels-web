'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Modal } from '@mantine/core'
import { FormProvider, useForm } from 'react-hook-form'
import { SelectTourList } from './components/SelectTourList'
import { useGetInfiniteTours } from './hooks'
import { type TourSchema, tourSchema } from './schemas'

interface BuyTicketModalProps {
  opened: boolean
  onClose: () => void
}

export const BuyTicketModal = ({ opened, onClose }: BuyTicketModalProps) => {
  const { data } = useGetInfiniteTours(100)

  const tours = data.pages.flatMap((page) => page.data)

  const methods = useForm<TourSchema>({
    resolver: zodResolver(tourSchema),
    defaultValues: {},
  })

  return (
    <FormProvider {...methods}>
      <Modal
        opened={opened}
        onClose={onClose}
        withCloseButton={false}
        size="1000px"
        centered
      >
        <SelectTourList data={tours} onClose={onClose} />
      </Modal>
    </FormProvider>
  )
}
