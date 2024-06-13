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

export default async function Home() {
  const data = await getData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DataTable
        columns={columns}
        data={data}
        initialSorting={[
          {
            id: 'region_name',
            desc: false, // sort by name in descending order by default
          },
        ]}
      />
    </main>
  )
}
