import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'components/ui/button'

export interface LinkHelperType {
  name: string
  path: string
}

const navLinks: LinkHelperType[] = [
  {
    name: 'Questions',
    path: '/questions'
  },
  {
    name: 'Lessons',
    path: '/lessons'
  }
]

export const Navigation = () => {
  return (
    <div className="text-md flex flex-col">
      {navLinks &&
        navLinks.map((link) => (
          <Button
            asChild
            key={link.name}
            variant={'ghost'}
            className="text-left justify-start hover:bg-primary/90 hover:text-secondary rounded-none pl-5 pr-10 py-5 text-secondary"
          >
            <Link to={link.path}>{link.name}</Link>
          </Button>
        ))}
    </div>
  )
}
