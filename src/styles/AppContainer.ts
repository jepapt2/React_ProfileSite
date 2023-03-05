import styled from 'styled-components'

//App.tsx用のレスポンシブコンテナ
const AppContainer = styled.div`
    min-height: 100vh;
    min-height: 100svh;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px 20px;
    > * {
        width: 100%;
        max-width: 480px;
    }
    @media (min-width: 768px) {
        > * {
          width: calc((100% - 40px) / 2);
          margin-right: 20px;
        }
      }
}
`
export default AppContainer
