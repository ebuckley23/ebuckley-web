import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';
import {Flex, Text} from '../common';
import * as Styled from './styled-components';

const MenuItem = ({children, onClick, ...rest}) => {
  const menuClick = ({name, to}) => {
    return (e) => onClick(e, {name, to});
  }
  return (
    <Flex>
      <Styled.MenuItem {...rest} onClick={menuClick(rest)}>
        {children}
      </Styled.MenuItem>
    </Flex>
  )
}

const menuOrder = {
  'home': 0,
  'style-guide': 1
};

class Menu extends PureComponent {
  state = {
    activeIndex: 0
  }
  componentDidMount() {
    const {location: {pathname = ''}} = this.props;
    const parsedPathName = pathname.replace('/', '');
    parsedPathName && this.setState({activeIndex: menuOrder[parsedPathName]});
  }
  navigate = (to, menuItemIndex) => {
    const {history} = this.props;
    this.setState({activeIndex: menuItemIndex}, () => history.push(to));
  }
  render = () => {
    const {activeIndex} = this.state;
    return (
      <Styled.Menu>
        <Styled.HeaderRow alignItems={'center'}>
          <Flex.Row>
            <MenuItem
              name='home'
              to='/'
              active={menuOrder['home'] === activeIndex}
              onClick={(e, {name, to}) => this.navigate(to, menuOrder[name])}>
              <Text>Home</Text>
            </MenuItem>
            <MenuItem
              name='style-guide'
              active={menuOrder['style-guide'] === activeIndex}
              to='style-guide'
              position='right'
              onClick={(e, {name, to}) => this.navigate(to, menuOrder[name])}>
              <Text>Style Guide</Text>
            </MenuItem>
          </Flex.Row>
          <Flex>
            <MenuItem>
              <Styled.Image src={'https://ebuckley.blob.core.windows.net/images/mabateam.png'} />
            </MenuItem>
          </Flex>
          <Flex.Row>
            <MenuItem width={'25%'}>
              <Styled.Icon icon={['fab', 'linkedin']} size='lg' />
            </MenuItem>
            <MenuItem width={'25%'}>
              <Styled.Icon icon={['fab', 'facebook']} size='lg' />
            </MenuItem>
            <MenuItem width={'25%'}>
              <Styled.Icon icon={['fab', 'instagram']} size='lg' />
            </MenuItem>
            <MenuItem width={'25%'}>
              <Styled.Icon icon={['fab', 'snapchat-square']} size='lg' />
            </MenuItem>
          </Flex.Row>
        </Styled.HeaderRow>
      </Styled.Menu>
    )
  }
}

const mapState = (state) => {
  return {

  }
}

const mapActions = (dispatch) => {
  return {
    actions: bindActionCreators({}, dispatch)
  }
}

export default withRouter(connect(mapState, mapActions)(Menu));