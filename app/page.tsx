'use client'

import React, { useState, useEffect } from 'react'
import { Spinner } from '@nextui-org/spinner'

import { columns, fetch_regions, fetch_cover_crops, fetch_ghg } from '@/features/region-table'
import { DataTable } from '@/components/ui/data-table'
import { compile_table_data } from '@/lib/compile-data'
import { TableData } from '@/types'

async function getData(): Promise<TableData> {
  const regions_response = await fetch_regions()
  const cover_crops_response = await fetch_cover_crops()
  const emissions_response = await fetch_ghg()

  return compile_table_data({
    regions: regions_response,
    cover_crops: cover_crops_response,
    ghg: emissions_response,
  })
}

export default function Home() {
  const [data, setData] = useState<TableData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const tableData = await getData()
        setData(tableData)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between px-24 pt-10 pb-24">
        <Spinner size="lg" />
      </main>
    )
  }

  if (!data) {
    return <div>Error loading data</div>
  }

  return (
    <main className="flex min-h-screen flex-col md:items-center px-6 md:px-24 pt-10 pb-24">
      <DataTable columns={columns} data={data} />
    </main>
  )
}
