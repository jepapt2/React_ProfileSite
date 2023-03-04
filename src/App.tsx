import AppContainer from './styles/AppContainer'
import { ThemeProvider } from 'styled-components'
import Theme from './styles/theme'
import Card from './components/ui/Card'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AppContainer>
        <Card>aa</Card>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
