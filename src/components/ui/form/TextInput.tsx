import { UseFormRegisterReturn } from 'react-hook-form/dist/types'
import styled from 'styled-components'

type Props = {
  register: UseFormRegisterReturn
  type: React.HTMLInputTypeAttribute | undefined
}

const TextInput: React.FC<Props> = ({ register, type }) => {
  return (
    <>
      <StyledLabel>
        <StyledInput {...register} type={type} placeholder="メールアドレス" />
        <StyledSpan>メールアドレス</StyledSpan>
      </StyledLabel>
    </>
  )
}

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`

const StyledInput = styled.input`
  background-color: ${(props) => props.theme.colors.lightGrayColor};
  color: ${(props) => props.theme.colors.textColor};
  border: none;
  border-radius: 15px;
  padding: 0.75rem 1rem;
  display: block;
  font-size: 1.25rem;
  width: 100%;
  order: 1;
  &::placeholder {
    color: transparent;
  }
  &:not(:placeholder-shown) + span {
    transform: translateY(0) translateX(-1rem) scale(0.75);
  }
  &:focus + span {
    transform: translateY(0) translateX(-1rem) scale(0.75);
  }
`

const StyledSpan = styled.span`
  font-size: 1.25rem;
  display: inline-block;
  transform: translateY(2.5rem) scale(1);
  transform-origin: left;
  transition: 0.3s;
  margin: 0 1rem;
`

export default TextInput
