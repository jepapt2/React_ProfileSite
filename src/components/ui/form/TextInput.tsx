import { useState } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form/dist/types'
import styled from 'styled-components'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { VisibilityOff } from '@mui/icons-material'

type Props = {
  register: UseFormRegisterReturn
  type: React.HTMLInputTypeAttribute | undefined
  placeholder: string
}

const TextInput: React.FC<Props> = ({ register, type, placeholder }) => {
  const [isPlaceholderAsLabel, setIsPlaceholderAsLabel] = useState(false)
  //パスワード表示ボタン用、パスワード以外はpropsのtypeのまま
  const [inputTypeState, setInputTypeState] = useState(type)

  return (
    <>
      <StyledLabel>
        <StyledDiv>
          <StyledInput
            {...register}
            type={inputTypeState}
            placeholder={placeholder}
            onFocus={() => setIsPlaceholderAsLabel(true)}
            onBlur={(e) => {
              //入力がある場合はラベルを上に移動させる
              e.target.value.length >= 1
                ? setIsPlaceholderAsLabel(true)
                : setIsPlaceholderAsLabel(false)
            }}
          />
          {type === 'password' && (
            <StyledPassWordHideButton
              type="button"
              onClick={() =>
                //パスワード表示ボタンを押すと、typeを切り替えて表示を切り替える
                setInputTypeState(
                  inputTypeState === 'password' ? 'text' : 'password'
                )
              }
            >
              {inputTypeState === 'password' ? (
                <VisibilityIcon />
              ) : (
                <VisibilityOff />
              )}
            </StyledPassWordHideButton>
          )}
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

  //placeholderを消す
  &::placeholder {
    color: transparent;
  }

  //Autocompleteの色が変わるのを防ぐ
  :-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px
      ${(props) => props.theme.colors.lightGrayColor} inset;
  }
`

const StyledSpan = styled.span<{ isPlaceholderAsLabel: boolean }>`
  color: ${(props) => props.theme.colors.grayColor};
  font-size: 1.25rem;
  display: inline-block;

  //isPlaceholderAsLabelがtrueの時は、上に移動しラベルのように見せる
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
  font-size: 1.25rem;
  margin-right: 1rem;
  > svg {
    margin-top: 0.5rem;
  }
`

export default TextInput
