import React, {PureComponent} from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import PropTypes from 'prop-types';
import {themeVariantTypes} from '../../constants';
import colors from '../colors';

const {white, black} = colors;

const bgColor = theme.variants('mode', 'variant', {
  default: {light: white, dark: black}
});

const StyledContainer = styled.div`
  background-color: ${bgColor};
  height: ${props => props.height};
  width: ${props => props.width};
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