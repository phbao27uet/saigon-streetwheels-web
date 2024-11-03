import { NumberInputHandler } from '@/components/shared/inputs/NumberInputHandler'
import { useFormContext } from 'react-hook-form'

interface TicketCounterProps {
  name: string
  price: number
  inputName: string
}

export const TicketCounter = ({
  name,
  price,
  inputName,
}: TicketCounterProps) => {
  const form = useFormContext()

  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex flex-col">
        <p className="text-xl font-bold">{name}:</p>
        <p className="text-xl">{price.toFixed(2)} USD</p>
      </div>

      <NumberInputHandler name={inputName} control={form.control} />
    </div>
  )
}
