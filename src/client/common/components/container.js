import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import PropTypes from 'prop-types';
import {themeVariantTypes} from '../../constants';
import colors from '../colors';

const {white, black} = colors;

const bgColor = theme.variants('mode', 'variant', {
  [themeVariantTypes.default]: {light: white, dark: black}
});

const StyledContainer = styled.div`
  background-color: ${bgColor};
`;

StyledContainer.propTypes = {
  variant: PropTypes.oneOf([themeVariantTypes.default])
};

StyledContainer.defaultProps = {
  variant: themeVariantTypes.default
};

export default ({children, variant}) => (
  <StyledContainer {...{variant}}>
    {children}
  </StyledContainer>
) 