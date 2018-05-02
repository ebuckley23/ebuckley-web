import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import PropTypes from 'prop-types';
import {themeVariantTypes} from '../../constants';
import colors from '../colors';

const {
  white,
  black,
  green,
  darkGreen,
  blue,
  red,
  yellow,
  grey
} = colors;

const bgColor = theme.variants('mode', 'variant', {
  [themeVariantTypes.default]: {light: white, dark: black},
  [themeVariantTypes.primary]: {light: white, dark: black},
  [themeVariantTypes.success]: {light: white, dark: black},
  [themeVariantTypes.warning]: {light: white, dark: black},
  [themeVariantTypes.error]: {light: white, dark: black}
});

const borderColor = theme.variants('mode', 'variant', {
  [themeVariantTypes.default]: {light: black, dark: white},
  [themeVariantTypes.primary]: {light: blue, dark: grey},
  [themeVariantTypes.success]: {light: green, dark: green},
  [themeVariantTypes.warning]: {light: yellow, dark: yellow},
  [themeVariantTypes.error]: {light: red, dark: red}
});

const fgColor = theme.variants('mode', 'variant', {
  [themeVariantTypes.default]: {light: black, dark: white},
  [themeVariantTypes.primary]: {light: blue, dark: grey},
  [themeVariantTypes.success]: {light: green, dark: green},
  [themeVariantTypes.warning]: {light: yellow, dark: yellow},
  [themeVariantTypes.error]: {light: red, dark: red}
});

const StyledInput = styled.input`
  color: ${fgColor};
  background-color: ${bgColor};
  border: solid ${borderColor};
`;

StyledInput.propTypes = {
  variant: PropTypes.oneOf(Object.values(themeVariantTypes))
}

StyledInput.defaultProps = {
  variant: themeVariantTypes.default
}

export default ({onChange, variant, value, placeholder}) => {
  return (
    <StyledInput {...{
      onChange,
      variant,
      value,
      placeholder
    }} />
  )
}