import { wpAPI } from 'api/axiosConfig'
import { Container } from 'components/Container'
import { Loader } from 'components/Loader'
import { PostPreview } from 'components/PostPreview'
import { Button } from 'components/ui/button'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Questions = () => {
  const [questions, setQuestionsData] = useState<any>(null)

  const questionsData = async () => {
    const data = await wpAPI.fetchQuestions()
    setQuestionsData(data)
  }

  useEffect(() => {
    questionsData()
  }, [])

  return (
    <Container>
      <div className="w-full pb-10">
        <Button className="text-left justify-start hover:bg-primary/90 hover:text-secondary rounded-none">
          <Link to="create">Create Question</Link>
        </Button>
      </div>
      <div className="w-full grid grid-cols-5 gap-4">
        {!questions ? (
          <Loader />
        ) : (
          questions.map((lesson: any) => (
            <PostPreview key={lesson?.id} postData={lesson} />
          ))
        )}
      </div>
    </Container>
  )
}
