import React, {PureComponent} from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import PropTypes from 'prop-types';
import {themeVariantTypes} from '../../constants';
import colors from '../colors';

const {white, black, grey, mabablue, mabared, mabagrey, lightgrey} = colors;

const firstGradient = theme('mode', {
  light: mabablue,
  dark: black,
  ebuckley: mabared
});
const secondGradient = theme('mode', {
  light: lightgrey,
  dark: grey,
  ebuckley: mabagrey
});
const thirdGradient = theme('mode', {
  light: mabablue,
  dark: black,
  ebuckley: mabablue
});

const bgColor = theme('mode', {
  light: white,
  dark: black,
  ebuckley: mabablue
});

const StyledContainer = styled.div`
  /* background-color: ${bgColor}; */
  height: ${props => props.height};
  width: ${props => props.width};
  background-image: linear-gradient(${firstGradient}, ${secondGradient}, ${thirdGradient});
`;

StyledContainer.propTypes = {
  variant: PropTypes.oneOf(['default'])
};

StyledContainer.defaultProps = {
  variant: 'default',
  height: '100vh',
  width: 'inherit'
};
export default class Container extends PureComponent {
  render = () => {
    const {children, ...rest} = this.props;
    return (
      <StyledContainer {...rest}>
        {children}
      </StyledContainer>
    )
  }
}