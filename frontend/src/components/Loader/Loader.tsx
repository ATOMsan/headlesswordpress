import React from 'react'
import { LoaderIcon } from 'lucide-react'

export const Loader: React.FC = () => {
  return (
    <div className="flex justify-start">
      <LoaderIcon className="animate-spin" />
    </div>
  )
}
