import React from 'react'
import type { FC } from 'react'
import { ChevronsUpDownIcon, ChevronUpIcon, ChevronDownIcon } from 'lucide-react'

const STYLING_CLASSES = 'ml-2 h-4 w-4'

interface SortIndicatorProps {
  sortState: boolean | 'asc' | 'desc'
}

const SortIndicator: FC<SortIndicatorProps> = ({ sortState }) => {
  if (sortState === 'asc')
    return (
      <span className="text-black">
        <ChevronUpIcon className={STYLING_CLASSES} />
      </span>
    )
  if (sortState === 'desc')
    return (
      <span className="text-black">
        <ChevronDownIcon className={STYLING_CLASSES} />
      </span>
    )

  return (
    <span>
      <ChevronsUpDownIcon className={STYLING_CLASSES} />
    </span>
  )
}

export default SortIndicator
