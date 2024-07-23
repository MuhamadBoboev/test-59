import { ThemeOptions } from '@mui/material'

import { palette } from '../palette'

export const buttonsTheme: ThemeOptions['components'] = {
  MuiButton: {
    styleOverrides: {
      root: {
        fontWeight: 500,
        textTransform: 'none',
        borderRadius: 48,
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
      },
    },
    defaultProps: {
      variant: 'contained',
    },
    variants: [
      {
        props: {
          size: 'small',
        },
        style: {
          fontSize: 16,
          fontWeight: 700,
          lineHeight: 1.25,
          paddingTop: 10,
          paddingBottom: 10,
          borderRadius: 8,
        },
      },
      {
        props: {
          size: 'medium',
        },
        style: {
          fontSize: 20,
          fontWeight: 500,
          lineHeight: 1.16,
          paddingTop: 12,
          paddingBottom: 12,
          paddingLeft: 16,  
          paddingRight: 16,
          borderRadius: 10,
        },
      },
      {
        props: {
          size: 'large',
        },
        style: {
          fontSize: 24,
          fontWeight: 700,
          lineHeight: 1.16,
          paddingTop: 24,
          paddingBottom: 24,
          paddingLeft: 32,
          paddingRight: 32,
          borderRadius: 12,
        },
      }
    ],
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        backgroundColor: '#F5F7FA',
        borderRadius: 10,
        '&:hover svg': {
          stroke: palette.primary.main,
        },
      },
    },
    variants: [
      {
        props: {
          size: 'large',
        },
        style: {
          padding: '12px 16px',
        },
      },
      {
        props: {
          size: 'medium',
        },
        style: {
          padding: 12,
        },
      },
      {
        props: {
          size: 'small',
        },
        style: {
          width: 32,
          height: 32,
        },
      }
    ],
  },
}
