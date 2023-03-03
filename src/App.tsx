import AppContainer from './styles/AppContainer'
import { ThemeProvider } from 'styled-components'
import Theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AppContainer></AppContainer>
    </ThemeProvider>
  )
}

export default App
