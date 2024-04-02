import axios from 'axios'

import { toast } from 'react-toastify'

const URL = process.env.REACT_APP_API_URL

export const instance = axios.create({ baseURL: URL })

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.log(error)
    toast.error(error.response.data.message)
    return error
  }
)

const headersConfig = (authData: string) => {
  return {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${authData}`
    }
  }
}

export const wpAPI = {
  async fetchLessons() {
    const resp = await instance.get(`/wp/v2/lessons`)
    return resp.data
  },
  async creatNewLesson({ authData, post }: any) {
    const config = headersConfig(authData)
    const response = await instance.post(`/wp/v2/lessons`, post, config)
    return response
  },
  async fetchQuestions() {
    const resp = await instance.get(`/wp/v2/questions`)
    return resp.data
  },
  async creatNewQuestion({ authData, post }: any) {
    const config = headersConfig(authData)

    const response = await instance.post(`/wp/v2/questions`, post, config)
    return response
  }
}
