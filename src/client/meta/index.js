import React, {PureComponent} from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import colors from '../common/colors';
import {Flex, Select} from '../common';
import {displayAppThemes} from '../constants';

const {black, mabared, white} = colors;
const bgColor = theme('mode', {
  light: 'lightsteelblue',
  dark: black,
  ebuckley: mabared
});

const color = theme('mode', {
  light: white,
  dark: 'limegreen',
  ebuckley: 'deepskyblue'
});

const StyledRow = styled(Flex.Row)`
  height: 1.5em;
  justify-content: flex-end;
  background-color: ${bgColor};
  border-bottom: 1px groove white;
`;

const StyledSelect = styled(Select)`
  flex-basis: 15%;
  padding: 0;
  color: ${color};
  background-color: ${bgColor};
  border: none;
  :hover {
    border-left: 1px solid white;
  }
`;

export default class Meta extends PureComponent {
  render = () => {
    const {web, actions} = this.props;
    return (
      <StyledRow>
        <StyledSelect
          onChange={(e, {value}) => actions.changeTheme(value)}
          value={web.mode}
          options={displayAppThemes}
        />
      </StyledRow>
    );
  }
}
