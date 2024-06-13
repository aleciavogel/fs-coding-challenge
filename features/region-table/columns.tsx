'use client'

import { CircularProgress } from '@nextui-org/progress'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'
import { ColumnDef } from '@tanstack/react-table'

import { RowData } from '@/types'
import { Button } from '@/components/ui/button'

export const columns: ColumnDef<RowData>[] = [
  {
    accessorKey: 'region_name',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        Region
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: 'cover_crop_adoption',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        Cover Crop Adoption
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const cover_crop_adoption = parseFloat(row.getValue('cover_crop_adoption'))

      if (cover_crop_adoption === Infinity)
        return <div className="text-right text-slate-500">N/A</div>

      const formatted = Math.round(cover_crop_adoption * 10) / 10
      const color = formatted < 20 ? 'danger' : formatted < 50 ? 'warning' : 'success'

      return (
        <div className="flex items-center gap-4 justify-end">
          <div className="text-right">
            <span className="font-medium">{formatted}%</span>
          </div>
          <CircularProgress
            aria-label="Loading..."
            size="sm"
            value={formatted}
            color={color}
            showValueLabel={false}
          />
        </div>
      )
    },
  },
  {
    accessorKey: 'ghg_ton_per_acre',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        Greenhouse Gas Emissions
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const ghg_ton_per_acre = parseFloat(row.getValue('ghg_ton_per_acre'))

      if (ghg_ton_per_acre === Infinity) return <div className="text-right text-slate-500">N/A</div>

      const formatted = Math.round(ghg_ton_per_acre * 1000) / 1000

      return (
        <div className="w-full text-right font-medium">
          {formatted}{' '}
          <span className="text-slate-500">
            MTCO<sub>2</sub>e / acre
          </span>
        </div>
      )
    },
  },
]
