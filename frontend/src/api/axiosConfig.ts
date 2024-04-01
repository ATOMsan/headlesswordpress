import axios from 'axios'

import { toast } from 'react-toastify'
import { useWpAuthContext } from 'services/auth/WpAuthProvider'

const URL = process.env.REACT_APP_API_URL

export const instance = axios.create({ baseURL: URL })

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.log(error)
    if (error.response.status === 401 || error.response.status === 404) {
      toast.error(error.response.data.message)
    }
    if (error.response.status === 500) {
      toast.error('Something went wrong!')
    }
    return error
  }
)

export const wpAPI = {
  async fetchLessons() {
    const resp = await instance.get(`/wp/v2/lessons`)
    return resp.data
  },
  async creatNewLesson({ authData, post }: any) {
    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${authData}`
      }
    }

    const { data } = await instance.post(`/wp/v2/lessons`, post, config)
  },
  async fetchQuestions() {
    const resp = await instance.get(`/wp/v2/questions`)
    return resp.data
  },
  async creatNewQuestion({ authData, post }: any) {
    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${authData}`
      }
    }

    const { data } = await instance.post(`/wp/v2/questions`, post, config)
  }
}
