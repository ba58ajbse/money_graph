'use client'

import ChartPie from '../components/ChartPie'
import { useQuery } from 'react-query'
import { fetchAmount } from '../lib/api/amount'

const Page = () => {
  const { data, isLoading, error } = useQuery('amount', fetchAmount)
  const point = 0

  if (isLoading) return <p>...Loading</p>
  if (error) return <p>Error!</p>

  return (
    <main className="flex flex-col h-full w-screen">
      {/* 総額 */}
      <div className="h-36 border-b-2 py-6 px-4">
        <p className="text-xl">資産総額</p>
        <div className="flex flex-row justify-end text-3xl">
          <div>
            <p>
              {data ? data.total.toLocaleString() : 0}
              <span className="ml-2 text-2xl">円</span>
            </p>
          </div>
        </div>
      </div>
      {/* グラフ */}
      <ChartPie
        cash={data ? data.bank.total : 0}
        stock={data ? data.sec.total : 0}
        point={point}
      />
    </main>
  )
}

export default Page
