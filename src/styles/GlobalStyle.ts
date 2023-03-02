import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-size: 16px;
    color: $base-color;
    *, *:before, *:after {
        box-sizing: border-box;
    }
    a {
        color: $base-color;
    }
  }
`

export default GlobalStyle
