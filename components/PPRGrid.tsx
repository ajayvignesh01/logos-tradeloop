import { VirtualGrid } from '@/components/VirtualGrid'
import { CMC } from '@/lib/types'
import { sql } from '@vercel/postgres'
import { unstable_noStore } from 'next/cache'

export async function PPRGrid() {
  unstable_noStore()
  const result = await sql.query(`SELECT id, rank, symbol, name FROM public.cmc ORDER BY rank`)
  const CMC = result.rows as CMC[] | null

  return <>{CMC && <VirtualGrid CMC={CMC || []} />}</>
}
