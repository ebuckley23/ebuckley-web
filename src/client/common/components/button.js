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

const fgColor = theme.variants('mode', 'variant', {
  default: {light: black, dark: white},
  primary: {light: blue, dark: grey},
  success: {light: green, dark: green},
  warning: {light: yellow, dark: yellow},
  error: {light: red, dark: red}
});

const StyledButton = styled.button`
  color: ${fgColor};
  background-color: ${bgColor};
  width: ${props => props.width};
  height: ${props => props.height};
  flex: ${props => props.flex};
  cursor: ${props => props.cursor};
`;

StyledButton.propTypes = {
  variant: PropTypes.oneOf(themeVariantTypes)
}

StyledButton.defaultProps = {
  variant: 'default',
  height: '2.5em',
  width: '8em',
  flex: 'none',
  cursor: 'pointer'
}

export default (props) => {
  const {children, ...rest} = props;
  return (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
  )
};