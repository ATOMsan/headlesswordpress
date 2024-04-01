import { Navigation } from 'components/Navigation'
import React, { PropsWithChildren } from 'react'

export const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full flex justify-start h-screen ">
      <aside className="flex flex-col bg-cyan-950 h-full w-1/12">
        <Navigation />
      </aside>
      <div className="flex flex-col items-start p-4 bg-slate-100 w-11/12">
        {children}
      </div>
    </div>
  )
}
