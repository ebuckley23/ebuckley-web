const mediaSizes = {
  desktop: 992,
  tablet: 768,
  phone: 376
}

/**
 * Take from styled components documentation
 * https://www.styled-components.com/docs/advanced
 */
export const media = Object.keys(mediaSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${mediaSizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {});

export const themeVariantTypes = {
  default: 'default',
  primary: 'primary',
  success: 'success',
  warning: 'warning',
  error: 'error'
}

export const appMode = {
  light: 'light',
  dark: 'dark'
}
