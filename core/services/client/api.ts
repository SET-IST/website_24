import axios from 'axios'

const ApiClient = axios.create({
  baseURL: process.env.NEXTAUTH_URL,
})

export { ApiClient }
