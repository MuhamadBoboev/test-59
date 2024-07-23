// import ChevronDownIcon from '@icons/chevron-down.svg?react'
import { ThemeOptions } from '@mui/material'

export const inputsTheme: ThemeOptions['components'] = {
  MuiInputBase: {
    styleOverrides: {
      root: {
        fontSize: 16,
        lineHeight: 1.33,
        color: '#000'
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: 'grey',
      },
      shrink: {
      },
      outlined: {
      },
      sizeSmall: {
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {

        '& > label': {
        },
      },
      notchedOutline: {
        backgroundColor: 'transparent',
        '& > legend': {
        },
      },
    },
    variants: [
      {
        props: {
          size: 'small',
        },
        style: {
          // borderRadius: 44,
          fontSize: 13,
          lineHeight: 1.53,
          '& > input': {
            padding: '13px 16px',
          },
        },
      },
      {
        props: {
          size: 'medium',
        },
        style: {
          '& > input': {
          },
        },
      },
    ],
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        borderRadius: 10,
        paddingRight: 0,
      }
    },
  }
  // MuiSelect: {
  //   defaultProps: {
  //     IconComponent: ChevronDownIcon,
  //   },
  //   styleOverrides: {
  //     icon: {
  //       top: 'auto',
  //     },
  //   },
  // },
}
