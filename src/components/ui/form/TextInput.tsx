import { useState } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form/dist/types'
import styled from 'styled-components'

type Props = {
  register: UseFormRegisterReturn
  type: React.HTMLInputTypeAttribute | undefined
  placeholder: string
}

const TextInput: React.FC<Props> = ({ register, type, placeholder }) => {
  const [value, setValue] = useState('')
  const [isPlaceholderAsLabel, setIsPlaceholderAsLabel] = useState(false)

  return (
    <>
      <StyledLabel>
        <StyledDiv>
          <StyledInput
            {...register}
            type={type}
            placeholder={placeholder}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setIsPlaceholderAsLabel(true)}
            onBlur={() =>
              value.length >= 1
                ? setIsPlaceholderAsLabel(true)
                : setIsPlaceholderAsLabel(false)
            }
          />
          <StyledPassWordHideButton>目</StyledPassWordHideButton>
        </StyledDiv>
        <StyledSpan isPlaceholderAsLabel={isPlaceholderAsLabel}>
          {placeholder}
        </StyledSpan>
      </StyledLabel>
    </>
  )
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  order: 1;
  width: 100%;
  border-radius: 60px;
  background-color: ${(props) => props.theme.colors.lightGrayColor};
`

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`

const StyledInput = styled.input`
  color: ${(props) => props.theme.colors.textColor};
  border-radius: 60px;
  background-color: transparent;
  width: 100%;
  border: none;
  outline: none;
  padding: 0.75rem 1rem;
  display: block;
  font-size: 1.25rem;
  &::placeholder {
    color: transparent;
  }
  :-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px
      ${(props) => props.theme.colors.lightGrayColor} inset;
  }

  &:-webkit-autofill::first-line {
    font-family: $body-font;
    // color: green;
  }
`

const StyledSpan = styled.span<{ isPlaceholderAsLabel: boolean }>`
  color: ${(props) => props.theme.colors.grayColor};
  font-size: 1.25rem;
  display: inline-block;
  transform: ${({ isPlaceholderAsLabel }) =>
    isPlaceholderAsLabel
      ? 'translateY(0) translateX(-1rem) scale(0.75)'
      : 'translateY(2.5rem) translateX(0) scale(1)'};
  transform-origin: left;
  transition: 0.3s;
  margin: 0 1rem;
`

const StyledPassWordHideButton = styled.button`
  background-color: transparent;
  border: none;
  width: 1.5rem;
  margin-right: 1rem;
`

export default TextInput
