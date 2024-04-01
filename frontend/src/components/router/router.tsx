import { Suspense, lazy } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const LessonsPage = lazy(() =>
  import('pages/lessons/LessonsPage').then((module) => ({
    default: module.LessonsPage
  }))
)

const CreateLessonPage = lazy(() =>
  import('pages/lessons/CreateLessonPage/CreateLessonPage').then((module) => ({
    default: module.CreateLesson
  }))
)

const QuestionsPage = lazy(() =>
  import('pages/questions/QuestionsPage').then((module) => ({
    default: module.Questions
  }))
)

const CreateQuestionPage = lazy(() =>
  import('pages/questions/CreateQuestionPage/CreateQuestionPage').then(
    (module) => ({
      default: module.CreateQuestionPage
    })
  )
)

const HomepagePage = lazy(() =>
  import('pages/homepage/Homepage').then((module) => ({
    default: module.Homepage
  }))
)

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomepagePage />
  },
  {
    path: '/lessons',
    children: [
      {
        index: true,
        element: <LessonsPage />
      },
      {
        path: 'create',
        element: <CreateLessonPage />
      }
    ]
  },
  {
    path: '/questions',
    children: [
      {
        index: true,
        element: <QuestionsPage />
      },
      {
        path: 'create',
        element: <CreateQuestionPage />
      }
    ]
  }
])

export const AppRouter = () => {
  return (
    <Suspense fallback={<h2>Loading</h2>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
