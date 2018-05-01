import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import PropTypes from 'prop-types';
import {themeVariantTypes} from '../constants';
import colors from './colors';

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

const fgColor = theme.variants('mode', 'variant', {
  [themeVariantTypes.default]: {light: black, dark: white},
  [themeVariantTypes.primary]: {light: blue, dark: grey},
  [themeVariantTypes.success]: {light: green, dark: green},
  [themeVariantTypes.warning]: {light: yellow, dark: yellow},
  [themeVariantTypes.error]: {light: red, dark: red}
});

const StyledButton = styled.button`
  color: ${props => props.color || fgColor};
  background-color: ${bgColor};
  width: 5em;
  height: 5em;
`;

StyledButton.propTypes = {
  variant: PropTypes.oneOf(Object.values(themeVariantTypes))
}

StyledButton.defaultProps = {
  variant: themeVariantTypes.default
}

export default ({children, color, onClick, variant}) => (
  <StyledButton {...{color, onClick, variant}}>
    {children}
  </StyledButton>
);