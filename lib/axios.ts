import Axios from 'axios'

const baseURL = process.env.APP_URL
export const axios = Axios.create({
  baseURL,
})
