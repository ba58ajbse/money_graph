import { NextApiRequest, NextApiResponse } from 'next'
import { fetchBankAmount, fetchSecAmount } from '../../lib/api/amount'

export default async function amountApi(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const bank = await fetchBankAmount()
    const sec = await fetchSecAmount()

    res.status(200).json({ data: { bank, sec } })
  } catch (err) {
    res.status(400).json({ message: err })
  }
}
