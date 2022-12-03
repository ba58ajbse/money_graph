'use client'

import { signIn, useSession } from 'next-auth/react'
import ChartPie from '../components/ChartPie'

const Page = () => {
  const { data: session } = useSession()
  const cash = 987653
  const stock = 246914
  const point = 0
  const totalAmount = cash + stock

  if (!session || !session.user) {
    return (
      <>
        Not signed in
        <button onClick={() => signIn()}>Log in</button>
      </>
    )
  }

  return (
    <main className="flex flex-col h-full w-screen">
      {/* 総額 */}
      <div className="h-36 border-b-2 py-6 px-4">
        <p className="text-xl">資産総額</p>
        <div className="flex flex-row justify-end text-3xl">
          <div>
            <p>
              {totalAmount.toLocaleString()}
              <span className="ml-2 text-2xl">円</span>
            </p>
          </div>
        </div>
      </div>
      {/* グラフ */}
      <ChartPie cash={cash} stock={stock} point={point} />
    </main>
  )
}

export default Page
