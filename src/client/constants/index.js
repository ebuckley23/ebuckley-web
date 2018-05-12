import {css} from 'styled-components';

const mediaSizes = {
  desktop: 992,
  tablet: 768,
  phone: 376
};

/**
 * Take from styled components documentation
 * https://www.styled-components.com/docs/advanced
 */
export const media = Object.keys(mediaSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${mediaSizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const themeVariantTypes = [
  'default',
  'primary',
  'secondary',
  'tertiary',
  'success',
  'warning',
  'error'
];

export const appTheme = {
  light: 'light',
  dark: 'dark',
  ebuckley: 'ebuckley'
};

export const displayAppThemes = [{
  value: appTheme.light,
  display: 'Theme - Light'
}, {
  value: appTheme.dark,
  display: 'Theme - Dark'
}, {
  value: appTheme.ebuckley,
  display: 'Theme - Ebuckley'
}];
