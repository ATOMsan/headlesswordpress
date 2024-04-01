import { wpAPI } from 'api/axiosConfig'
import { Container } from 'components/Container'
import { Loader } from 'components/Loader'
import { PostPreview } from 'components/PostPreview'
import { Button } from 'components/ui/button'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const LessonsPage = () => {
  const [lessons, setLessonsData] = useState<any>(null)

  const lessonsData = async () => {
    const data = await wpAPI.fetchLessons()
    setLessonsData(data)
  }

  useEffect(() => {
    lessonsData()
  }, [])

  return (
    <Container>
      <div className="w-full pb-10">
        <Button className="text-left justify-start hover:bg-primary/90 hover:text-secondary rounded-none">
          <Link to="create">Create Lesson</Link>
        </Button>
      </div>
      <div className="w-full grid grid-cols-5 gap-4">
        {!lessons ? (
          <Loader />
        ) : (
          lessons.map((lesson: any) => (
            <PostPreview key={lesson?.id} postData={lesson} />
          ))
        )}
      </div>
    </Container>
  )
}
