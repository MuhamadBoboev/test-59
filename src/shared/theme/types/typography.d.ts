import {
  FontStyleOptions,
  TypographyStyleOptions,
  Variant,
} from '@mui/material/styles/createTypography'

type CustomVariants = 'xl' | 'large' | 'medium' | 'small' | 'xs' | 'xxs'

declare module '@mui/material/styles/createTypography' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface TypographyOptions
    extends Partial<
      Record<Variant | CustomVariants, TypographyStyleOptions> &
        FontStyleOptions
    > {}
}

declare module '@mui/material/typography' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface TypographyPropsVariantOverrides
    extends Record<CustomVariants, true> {}
}

export {}
