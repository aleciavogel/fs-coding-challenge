'use client'

import { ColumnDef } from '@tanstack/react-table'

import { RowData } from '@/types'

export const columns: ColumnDef<RowData>[] = [
  {
    accessorKey: 'region_name',
    header: 'Region',
  },
  {
    accessorKey: 'cover_crop_adoption',
    header: 'Cover Crop Adoption',
  },
  {
    accessorKey: 'ghg_ton_per_acre',
    header: 'Greenhouse Gas Emissions',
  },
]
