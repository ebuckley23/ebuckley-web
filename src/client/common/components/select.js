import React, {PureComponent} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {themeVariantTypes} from '../../constants';

const StyledSelect = styled.select`
  padding: 1em 1em;
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
};

export default class Select extends PureComponent {
  render() {
    const {
      children, placeholder, placeholderEnabled = false, options = [], onChange, ...rest
    } = this.props;
    return (
      <StyledSelect onChange={e => onChange(e, {value: e.target.value})} {...rest}>
        {options.map((item) => {
          const disabled = item.value === 0 && !placeholderEnabled;
          return (
            <option {...{disabled}} key={item.value} value={item.value}>{item.display}</option>
          );
        })}
      </StyledSelect>
    );
  }
}
