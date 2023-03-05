import { createGlobalStyle } from 'styled-components'
import Theme from './theme'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif;
    background: linear-gradient(to right,${Theme.colors.bodyBackGround.start},${Theme.colors.bodyBackGround.end});
    background: -moz-linear-gradient(to right,${Theme.colors.bodyBackGround.start},${Theme.colors.bodyBackGround.end});
    background: -webkit-linear-gradient(to right,${Theme.colors.bodyBackGround.start},${Theme.colors.bodyBackGround.end});
    color: ${Theme.colors.textColor};
    *, *:before, *:after {
        box-sizing: border-box;
    }
    a {
        color: $base-color;
    }
  }
`

export default GlobalStyle
