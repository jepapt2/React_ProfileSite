import AppContainer from './styles/AppContainer'
import { ThemeProvider } from 'styled-components'
import Theme from './styles/theme'
import Router from './routes/Router'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AppContainer>
        <Router />
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
