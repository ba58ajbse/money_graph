import { GetCommand } from '@aws-sdk/lib-dynamodb'
import { axios } from '../axios'
import { dynamoClient } from '../dynamo'

export type FetchAmountType = {
  [key: string]: number
}

type FetchAmountReturnType = {
  total: number
  bank: {
    total: number
  }
  sec: {
    total: number
  }
}
type FetchAmountApiReturnType = {
  bank: FetchAmountType[]
  sec: FetchAmountType[]
}

export const fetchBankAmount = async (): Promise<FetchAmountType[]> => {
  const commamd = new GetCommand({
    TableName: 'money_graph_v2',
    Key: { amount: 'bank', ymd: '20221216' },
  })

  const items = await dynamoClient
    .send(commamd)
    .then((res) => res.Item)
    .catch((err) => {
      throw new Error('fetch bank data failed.')
    })
  if (!items) {
    throw new Error('no bank data.')
  }

  const data = Object.keys(items)
    .filter((key) => key !== 'amount' && key !== 'ymd')
    .map((key) => {
      return { [key]: items[key] }
    })

  return data
}

export const fetchSecAmount = async (): Promise<FetchAmountType[]> => {
  const commamd = new GetCommand({
    TableName: 'money_graph_v2',
    Key: { amount: 'sec', ymd: '20221216' },
  })

  const items = await dynamoClient
    .send(commamd)
    .then((res) => res.Item)
    .catch((err) => {
      throw new Error('fetch sec data failed.')
    })
  if (!items) {
    throw new Error('no sec data.')
  }

  const data = Object.keys(items)
    .filter((key) => key !== 'amount' && key !== 'ymd')
    .map((key) => {
      return { [key]: items[key] }
    })

  return data
}

export const fetchAmount = async (): Promise<FetchAmountReturnType> => {
  const res: FetchAmountApiReturnType = await axios('/api/amount')
    .then((res) => res.data.data)
    .catch((err) => {
      console.error(err)

      throw new Error('fetchAmount error.')
    })

  const cash = res.bank.reduce((prev, obj) => prev + Object.values(obj)[0], 0)

  const stock = res.sec.reduce((prev, obj) => prev + Object.values(obj)[0], 0)

  return {
    total: cash + stock,
    bank: { total: cash },
    sec: { total: stock },
  }
}
