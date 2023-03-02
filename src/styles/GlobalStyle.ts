import { createGlobalStyle } from 'styled-components'
import Colors from './themeColors.json'

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
    background: linear-gradient(to right,${Colors.bodyBackGround.start},${Colors.bodyBackGround.end});
    background: -moz-linear-gradient(to right,${Colors.bodyBackGround.start},${Colors.bodyBackGround.end});
    background: -webkit-linear-gradient(to right,${Colors.bodyBackGround.start},${Colors.bodyBackGround.end});
    font-size: 16px;
    color: ${Colors.textColor};
    *, *:before, *:after {
        box-sizing: border-box;
    }
    a {
        color: $base-color;
    }
  }
`

export default GlobalStyle
