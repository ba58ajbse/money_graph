'use client'

import { ReactNode } from 'react'
import { Chart as ChartJS, ArcElement } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import CircleIcon from '@mui/icons-material/Circle'
import blue from '@mui/material/colors/blue'
import red from '@mui/material/colors/red'
import yellow from '@mui/material/colors/yellow'

ChartJS.register(ArcElement)

type Props = {
  cash: number
  stock: number
  point: number
}
type LabelWrapProps = {
  children: ReactNode
}
const LabelWrap = ({ children }: LabelWrapProps) => {
  return (
    <div className="flex flex-row justify-between items-center w-full h-14">
      {children}
    </div>
  )
}
const Yen = () => {
  return <span className="ml-1">円</span>
}

const percent = (total: number, item: number) => {
  return Number((item / total).toFixed(2)) * 100
}
const YenDetail = ({ total, item }: { total: number; item: number }) => {
  return (
    <div>
      <p>
        {item.toLocaleString()}
        <Yen />
        <span>{`(${percent(total, item)}%)`}</span>
      </p>
    </div>
  )
}

const ChartPie = ({ cash, stock, point }: Props) => {
  const data = {
    labels: ['現金', '証券', 'その他'],
    datasets: [
      {
        label: '# of Votes',
        data: [cash, stock, point],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const total = cash + stock + point

  return (
    <>
      <div className="flex justify-center h-60 p-8">
        <Pie data={data} />
      </div>
      <div className="flex flex-col h-full px-6 text-lg">
        <LabelWrap>
          <div className="flex text-base">
            <CircleIcon htmlColor={blue[400]} className="text-base" />
            <p className="ml-2">預金・現金</p>
          </div>
          <YenDetail total={total} item={cash} />
        </LabelWrap>
        <LabelWrap>
          <div className="flex text-base">
            <CircleIcon htmlColor={red[400]} className="text-base" />
            <p className="ml-2">株式・投資信託</p>
          </div>
          <YenDetail total={total} item={stock} />
        </LabelWrap>
        <LabelWrap>
          <div className="flex">
            <CircleIcon htmlColor={yellow[400]} className="text-base" />
            <p className="ml-2">ポイント</p>
          </div>
          <YenDetail total={total} item={point} />
        </LabelWrap>
      </div>
    </>
  )
}

export default ChartPie
