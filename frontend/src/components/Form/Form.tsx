import { Button } from 'components/ui/button'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useWpAuthContext } from 'services/auth/WpAuthProvider'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { wpAPI } from 'api/axiosConfig'
import { Loader } from 'components/Loader'
import { toast } from 'react-toastify'

interface FormProps {
  apiMethod: (config: any) => Promise<any> // Define the type of apiMethod
}

export const Form: React.FC<FormProps> = ({ apiMethod }) => {
  const authData = useWpAuthContext()

  const schema = yup.object().shape({
    title: yup.string().required(),
    content: yup.string().required()
  })

  const onSubmitHandler = async (data: any) => {
    const postData = {
      status: 'publish',
      ...data
    }

    const config = {
      authData: authData.token,
      post: postData
    }
    try {
      const response = await apiMethod(config)
      if (response?.name === 'AxiosError') {
        toast.error(
          response?.message
            ? response?.message
            : 'Something Whent Wrong, try again next time!'
        )
      } else {
        toast.success('Post Is Created')
        reset()
      }
    } catch (error) {
      toast.error('Error Creating Post')
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({ resolver: yupResolver(schema) })
  return (
    <div>
      {!authData ? (
        <Loader />
      ) : (
        <div>
          <form
            className="flex flex-col gap-2 w-[400px]"
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <input {...register('title')} placeholder="title" required />
            <p>{errors.title?.message}</p>
            <textarea
              {...register('content')}
              className="h-[200px]"
              placeholder="description"
            />
            <p>{errors.content?.message}</p>
            <Button type="submit" disabled={isSubmitting}>
              <span>Create</span>
            </Button>
          </form>
          {isSubmitting && (
            <div className="pt-6">
              <Loader />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
