import Axios from 'axios'

const baseURL = 'http://localhost:3000'
export const axios = Axios.create({
  baseURL,
})
