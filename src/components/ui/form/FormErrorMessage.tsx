import { ErrorMessage } from '@hookform/error-message'
import { FieldErrors } from 'react-hook-form'
import styled from 'styled-components'

type Props = {
  errors: FieldErrors
  name: string
}

const FormErrorMessage: React.FC<Props> = ({ errors, name }) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => <StyledP>{message}</StyledP>}
    />
  )
}

const StyledP = styled.p`
  font-size: 0.8rem;
  color: red;
  margin: 0 1rem;
`

export default FormErrorMessage
