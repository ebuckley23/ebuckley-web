import React, {PureComponent} from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import PropTypes from 'prop-types';
import {themeVariantTypes} from '../../constants';
import colors from '../colors';

const StyledSelect = styled.select`
  padding: 1em 1em;
  margin: 8px 0;
  display: flex;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

StyledSelect.propTypes = {
  variant: PropTypes.oneOf(themeVariantTypes)
};

StyledSelect.defaultProps = {
  variant: 'default'
}

export default class Select extends PureComponent {
  render() {
    const {children, placeholder, placeholderEnabled = false, options = [], ...rest} = this.props;
    //TODO: Fix
    const displayOptions = placeholder ? options.unshift({display: placeholder, value: 0}) : options;
    return (
      <StyledSelect {...rest}>
        {options.map((item, idx) => {
          const disabled = item.value === 0 && !placeholderEnabled;
          return (
            <option {...{disabled}} key={idx}>{item.display}</option>
          )
        })}
      </StyledSelect>
    )
  }
}