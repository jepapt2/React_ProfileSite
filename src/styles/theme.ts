import 'styled-components'

const Theme = {
  colors: {
    baseColor: '#F9F9F9',
    textColor: '#1E1E1E',
    accentColor: '#F9B043',
    bodyBackGround: {
      start: '#373B44',
      end: '#4286F4',
    },
  },
} as const

export default Theme

type AppTheme = typeof Theme

// theme用の型定義
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends AppTheme {}
}
