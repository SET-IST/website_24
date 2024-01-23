import axios from 'axios'

const ApiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
  ,
})

export { ApiClient }
