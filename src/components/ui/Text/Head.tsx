import styled from 'styled-components'

type Props = {
  children: string
}

const Head: React.FC<Props> = ({ children }) => {
  return <StyledHead>{children}</StyledHead>
}

const StyledHead = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin: 0;
`

export default Head
