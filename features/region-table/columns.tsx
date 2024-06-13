'use client'

import { CircularProgress } from '@nextui-org/progress'
import { ColumnDef } from '@tanstack/react-table'

import { RowData } from '@/types'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import SortableTableHeader from '@/components/sortable-table-header'

const NotApplicableCell = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger className="w-full text-right font-medium px-4 text-slate-500">
        N/A
      </TooltipTrigger>
      <TooltipContent>
        <p>Missing value for "total field acreage"</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
)

export const columns: ColumnDef<RowData>[] = [
  {
    accessorKey: 'region_name',
    header: ({ column }) => <SortableTableHeader column={column} label="Region" />,
    cell: ({ row }) => {
      const region_name = row.getValue('region_name') as string
      return <div className="font-medium px-4">{region_name}</div>
    },
  },
  {
    accessorKey: 'cover_crop_adoption',
    sortUndefined: -1, // sort undefined values to the bottom
    header: ({ column }) => <SortableTableHeader column={column} label="Cover Crop Adoption" />,
    cell: ({ row }) => {
      const cover_crop_adoption = row.getValue('cover_crop_adoption')
      const parsed = parseFloat(cover_crop_adoption as string)

      if (cover_crop_adoption === undefined) return <NotApplicableCell />

      const formatted = Math.round(parsed * 10) / 10
      const color = formatted < 20 ? 'danger' : formatted < 50 ? 'warning' : 'success'

      return (
        <div className="flex items-center gap-4 justify-end px-4">
          <div className="text-right">
            <span className="font-medium">{formatted}%</span>
          </div>
          <CircularProgress
            aria-label={`${formatted}%`}
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
    sortUndefined: -1, // sort undefined values to the bottom
    header: ({ column }) => (
      <SortableTableHeader column={column} label="Greenhouse Gas Emissions" />
    ),
    cell: ({ row }) => {
      const ghg_ton_per_acre = row.getValue('ghg_ton_per_acre')
      const parsed = parseFloat(ghg_ton_per_acre as string)

      if (ghg_ton_per_acre === undefined) return <NotApplicableCell />

      const formatted = Math.round(parsed * 1000) / 1000

      return (
        <div className="w-full text-right font-medium px-4">
          {formatted}{' '}
          <span className="text-slate-500">
            MTCO<sub>2</sub>e / acre
          </span>
        </div>
      )
    },
  },
]
