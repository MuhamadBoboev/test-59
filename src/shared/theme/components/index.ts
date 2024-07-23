import { ThemeOptions } from '@mui/material'

import { buttonsTheme } from './buttons'
import { inputsTheme } from './inputs'

import.meta.env.BASE_URL
export const components: ThemeOptions['components'] = {
  ...buttonsTheme,
  ...inputsTheme,
  MuiChip: {
    styleOverrides: {
      root: {
        fontWeight: 600,
      },
    },
    variants: [
      {
        props: {
          size: 'small',
        },
        style: {
          height: 20,
          padding: '0 4px',
          fontSize: 9,
          lineHeight: 1,
          fontWeight: 600,
        },
      },
      {
        props: {
          size: 'medium',
        },
        style: {
          height: 32,
          padding: '0 4px',
          fontSize: 11,
          lineHeight: 1,
          borderRadius: '12px',
        },
      },
    ],
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        borderRadius: '16px',
      },
    },
  },
  MuiListItemText: {
    styleOverrides: {
      primary: {
        fontWeight: 600,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        marginRight: '8px',
      },
      secondary: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        marginRight: '4px',
      },
    },
  },
}
