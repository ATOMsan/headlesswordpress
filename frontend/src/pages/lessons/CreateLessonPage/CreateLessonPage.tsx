import { wpAPI } from 'api/axiosConfig'
import { Container } from 'components/Container'
import { Form } from 'components/Form'

export const CreateLesson = () => {
  return (
    <Container>
      <Form apiMethod={wpAPI.creatNewLesson} />
    </Container>
  )
}
