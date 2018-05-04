import React, {PureComponent} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledFlex = styled.div`
  display: flex;
  flex: ${props => props.flex};
  flex-wrap: wrap;
`;

const StyledFlexRow = StyledFlex.extend`
  flex-direction: row;
`;

const StyledFlexColumn = StyledFlex.extend`
  flex-direction: column;
`;

StyledFlex.defaultProps = {
  flex: 'none'
}

export default class extends PureComponent {
  static Row = StyledFlex;
  static Column = StyledFlexColumn;
  render() {
    const {children, ...rest} = this.props;
    return (<StyledFlexColumn {...rest}>{children}</StyledFlexColumn>)
  }
}