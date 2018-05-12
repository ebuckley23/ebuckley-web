import React, {PureComponent} from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import MetaHeader from '../meta';
import * as webActions from '../actions/web';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Styled from './styled-components';
import DropDown from './components/DropDown';
import {menuConfig} from './config';
import {withRouter} from 'react-router';

class Web extends PureComponent {
  componentWillMount() {
    const {actions} = this.props;
    actions.getEbuckley();
  }
  render = () => {
    const {socialDDVisible, navDDVisible, history, location, actions} = this.props;
    return (
      <>
        <MetaHeader {...this.props}/>
        <Menu {...this.props} />
        <DropDown
          {...this.props}
          onAfterClick={actions.toggleNavDropDown}
          toggled={navDDVisible}
          options={menuConfig} />
        <DropDown toggled={socialDDVisible} options={[]} />
        <Styled.MainContainer>
          {this.props.children}
        </Styled.MainContainer>
      </>
    )
  }
}

const mapState = (state) => {
  return {
    web: state.web,
    socialDDVisible: state.web.socialDDVisible,
    navDDVisible: state.web.navDDVisible
  }
}

const mapActions = (dispatch) => {
  return {
    actions: bindActionCreators({...webActions}, dispatch)
  }
}
export default withRouter(connect(mapState, mapActions)(Web));