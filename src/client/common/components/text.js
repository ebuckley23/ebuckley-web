import React, {PureComponent} from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import PropTypes from 'prop-types';
import {themeVariantTypes} from '../../constants';
import colors from '../colors';

const alignProps = ['left', 'center', 'right'];

const {
  white,
  black,
  green,
  darkGreen,
  blue,
  red,
  yellow,
  grey,
  purple
} = colors;

const color = theme.variants('mode', 'variant', {
  default: {light: black, dark: white, ebuckley: black},
  primary: {light: blue, dark: white},
  secondary: {light: purple, dark: white},
  tertiary: {light: darkGreen, dark: white}
});

const StyledText = styled.span`
  text-align: ${props => props.align};
  color: ${color};
  text-decoration: ${props => props.decoration};
`;

const StyledH1 = StyledText.withComponent('h1');

const StyledH2 = StyledText.withComponent('h2');

const StyledLabel = StyledText.withComponent('label');

StyledText.propTypes = {
  variant: PropTypes.oneOf(themeVariantTypes),
  align: PropTypes.oneOf(alignProps)
}

StyledText.defaultProps = {
  variant: 'default',
  align: alignProps[0],
  decoration: 'none'
}

StyledH1.propTypes = {
  variant: PropTypes.oneOf(themeVariantTypes),
  align: PropTypes.oneOf(alignProps)
}

StyledH1.defaultProps = {
  variant: 'default',
  align: alignProps[1]
}

StyledH2.propTypes = {
  variant: PropTypes.oneOf(themeVariantTypes),
  align: PropTypes.oneOf(alignProps)
}

StyledH2.defaultProps = {
  variant: 'default',
  align: alignProps[1]
}

StyledLabel.propTypes = {
  variant: PropTypes.oneOf(themeVariantTypes),
  align: PropTypes.oneOf(alignProps)
}

StyledLabel.defaultProps = {
  variant: 'default',
  align: alignProps[0]
}

export default class Text extends PureComponent {
  static H1 = StyledH1;
  static H2 = StyledH2;
  static Label = StyledLabel;
  render() {
    const {children} = this.props;
    return (
      <StyledText>
        {children}
      </StyledText>
    )
  }
}