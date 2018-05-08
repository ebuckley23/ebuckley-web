import React, {PureComponent} from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import * as webActions from '../actions/web';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Container} from '../common';

const StyledContainer = styled(Container)`
  margin: 0 15em;
  min-height: 30em;
  height: inherit;
`;

class Web extends PureComponent {
  componentWillMount() {
    const {actions} = this.props;
    actions.getEbuckley();
  }
  render = () => {
    return (
      <>
        <Menu />
        <StyledContainer>
          {this.props.children}
        </StyledContainer>
      </>
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
export default connect(mapState, mapActions)(Web);