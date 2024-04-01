import { wpAPI } from 'api/axiosConfig'
import { Container } from 'components/Container'
import { Form } from 'components/Form'

export const CreateQuestionPage = () => {
  return (
    <Container>
      <Form apiMethod={wpAPI.creatNewQuestion} />
    </Container>
  )
}
