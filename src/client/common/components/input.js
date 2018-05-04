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
  default: {light: white, dark: black},
  primary: {light: white, dark: black},
  success: {light: white, dark: black},
  warning: {light: white, dark: black},
  error: {light: white, dark: black}
});

const borderColor = theme.variants('mode', 'variant', {
  default: {light: black, dark: white},
  primary: {light: blue, dark: grey},
  success: {light: green, dark: green},
  warning: {light: yellow, dark: yellow},
  error: {light: red, dark: red}
});

const fgColor = theme.variants('mode', 'variant', {
  default: {light: black, dark: white},
  primary: {light: blue, dark: white},
  success: {light: green, dark: white},
  warning: {light: yellow, dark: white},
  error: {light: red, dark: white}
});

const StyledInput = styled.input.attrs({
  type: props => props.type
})`
  color: ${fgColor};
  background-color: ${bgColor};
  border: 2px solid ${borderColor};
  flex: ${props => props.flex};
  padding: 1em 1em;
  margin: 8px 0;
  display: flex;
  border-radius: 4px;
  box-sizing: border-box;
`;

StyledInput.propTypes = {
  variant: PropTypes.oneOf(themeVariantTypes),
  type: PropTypes.oneOf(['text', 'password', 'email'])
}

StyledInput.defaultProps = {
  variant: 'default',
  type: 'text',
  flex: 'none'
}

export default (props) => {
  return (
    <StyledInput {...props} />
  )
}