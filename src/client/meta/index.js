import React, {PureComponent} from 'react';
import styled from 'styled-components';
import * as webActions from '../actions/web';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Flex, Select} from '../common';
import {displayAppThemes} from '../constants';
import theme from 'styled-theming';
import colors from '../common/colors';

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
})

const StyledRow = styled(Flex.Row)`
  height: 1.5em;
  justify-content: flex-end;
  background-color: ${bgColor};
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

class Meta extends PureComponent {
  render = () => {
    const {web, actions} = this.props;
    return (
      <StyledRow>
        <StyledSelect
          onChange={(e, {value}) => actions.changeTheme(value)}
          value={web.mode}
          options={displayAppThemes} />
      </StyledRow>
    )
  }
}

const mapState = (state) => {
  return {
    web: state.web
  }
}

const mapActions = (dispatch) => {
  return {
    actions: bindActionCreators({...webActions}, dispatch)
  }
}

export default connect(mapState, mapActions)(Meta);