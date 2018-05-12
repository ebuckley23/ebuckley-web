import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';
import Menu from './Menu';
import MetaHeader from '../meta';
import * as webActions from '../actions/web';
import * as Styled from './styled-components';
import DropDown from './components/DropDown';
import {menuConfig} from './config';

class Web extends PureComponent {
  componentWillMount() {
    const {actions} = this.props;
    actions.getEbuckley();
  }
  render = () => {
    const {
      socialDDVisible, navDDVisible, actions
    } = this.props;
    return (
      <React.Fragment>
        <MetaHeader {...this.props} />
        <Menu {...this.props} />
        <DropDown
          {...this.props}
          onAfterClick={actions.toggleNavDropDown}
          toggled={navDDVisible}
          options={menuConfig}
        />
        <DropDown toggled={socialDDVisible} options={[]} />
        <Styled.MainContainer>
          {this.props.children}
        </Styled.MainContainer>
      </React.Fragment>
    );
  }
}

const mapState = state => ({
  web: state.web,
  socialDDVisible: state.web.socialDDVisible,
  navDDVisible: state.web.navDDVisible
});

const mapActions = dispatch => ({
  actions: bindActionCreators({...webActions}, dispatch)
});

export default withRouter(connect(mapState, mapActions)(Web));
