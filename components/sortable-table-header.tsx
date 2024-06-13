import React from 'react'
import type { FC } from 'react'
import type { Column } from '@tanstack/react-table'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import SortIndicator from '@/components/sort-indicator'
import { RowData } from '@/types'

interface SortIndicatorProps {
  label: string
  column: Column<RowData>
}

const SortableTableHeader: FC<SortIndicatorProps> = ({ column, label }) => {
  const sortState = column.getIsSorted()
  const isSortActive = sortState === 'asc' || sortState === 'desc'

  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(sortState === 'asc')}
      className={cn(isSortActive && 'text-gray-900')}
    >
      {label}
      <SortIndicator sortState={sortState} />
    </Button>
  )
}

export default SortableTableHeader
