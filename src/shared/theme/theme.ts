import { createTheme } from '@mui/material'

import { palette } from './palette'
import { typography } from './typography'
import { components } from './components'

export const theme = createTheme({
  palette,
  typography,
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minHeight: '100vh',
          backgroundColor: '#F5F7FA',
        }
      },
    },
    ...components,
  },
})
