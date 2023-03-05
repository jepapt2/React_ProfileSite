import styled from 'styled-components'

type Props = {
  children: React.ReactNode
}

const Card: React.FC<Props> = ({ children }) => {
  return <StyledCard>{children}</StyledCard>
}

const StyledCard = styled.div`
  background-color: ${(props) => props.theme.colors.baseColor};
  border-radius: 15px;
  padding: 1.5rem 1rem;
`
export default Card
