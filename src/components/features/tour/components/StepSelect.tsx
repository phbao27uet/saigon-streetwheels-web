import { cn } from '@/libs/utils'
import { IconArrowRight } from '@tabler/icons-react'
import React from 'react'

interface StepSelectProps {
  step: number
}

const STEPS = ['Start', 'Every time']

export const StepSelect = ({ step }: StepSelectProps) => {
  return (
    <div className="flex gap-2 items-center">
      {STEPS.map((item, index) => (
        <React.Fragment key={item}>
          {index !== 0 && <IconArrowRight size={20} />}
          <div
            className={cn(
              'text-lg font-medium text-black',
              index !== step && 'opacity-50',
            )}
          >
            {item}
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}
