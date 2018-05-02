import React, {PureComponent} from 'react';
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
  grey,
  purple
} = colors;

const color = theme.variants('mode', 'variant', {
  [themeVariantTypes.default]: {light: black, dark: white},
  [themeVariantTypes.primary]: {light: blue, dark: white},
  [themeVariantTypes.secondary]: {light: purple, dark: white},
  [themeVariantTypes.tertiary]: {light: darkGreen, dark: white}
});

const StyledText = styled.span`
  color: ${color};
`;

const StyledH1 = styled.h1`
  color: ${color};
`;

const StyledH2 = styled.h2`
  color: ${color};
`;

const StyledLabel = styled.label`
  color: ${color};
`;

StyledText.propTypes = {
  variant: PropTypes.oneOf(Object.values(themeVariantTypes))
}

StyledText.defaultProps = {
  variant: themeVariantTypes.default
}

StyledH1.propTypes = {
  variant: PropTypes.oneOf(Object.values(themeVariantTypes))
}

StyledH1.defaultProps = {
  variant: themeVariantTypes.default
}

StyledH2.propTypes = {
  variant: PropTypes.oneOf(Object.values(themeVariantTypes))
}

StyledH2.defaultProps = {
  variant: themeVariantTypes.default
}

StyledLabel.propTypes = {
  variant: PropTypes.oneOf(Object.values(themeVariantTypes))
}

StyledLabel.defaultProps = {
  variant: themeVariantTypes.default
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