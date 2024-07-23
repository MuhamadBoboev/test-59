import { ThemeOptions } from '@mui/material'
import createPalette from '@mui/material/styles/createPalette'

export const colors: ThemeOptions['palette'] = {
  mode: 'light',
  primary: {
    main: '#39b980',
  },
  secondary: {
    main: '#000',
  },
  success: {
    main: '#0E9F6E',
  },
  error: {
    main: '#F05252',
  },
  text: {
    primary: '#231F20',
    secondary: '#39b980',
    tertiary: '#A0A3BD',
  },
}
export const palette = createPalette(colors)
