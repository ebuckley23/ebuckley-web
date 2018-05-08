import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import styled from 'styled-components';
import {withRouter} from 'react-router';
import {media} from '../constants';
import {Flex, Text} from '../common';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const StyledMenu = styled.header`
  position: relative;
  height: 10em;
  background-image: linear-gradient(darkRed, lightgrey, darkblue);
  border-bottom-left-radius: 50% 20%;
  border-bottom-right-radius: 50% 20%;
`;

const StyledMenuItem = styled.a`
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  border-radius: 4px;
  width: ${props => props.width || '100%'};
  cursor: pointer;
`;

const StyledImage = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  flex: 1;
  color: white;
  cursor: pointer;
`;

const MenuItem = ({children, onClick, ...rest}) => {
  const menuClick = ({name, to}) => {
    return (e) => onClick(e, {name, to});
  }
  return (
    <Flex>
      <StyledMenuItem {...rest} onClick={menuClick(rest)}>
        {children}
      </StyledMenuItem>
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
      <StyledMenu>
        <Flex.Row alignItems={'center'}>
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
              <StyledImage src={require('../../../MABA Team.png')} />
            </MenuItem>
          </Flex>
          <Flex.Row>
            <MenuItem width={'25%'}>
              <StyledIcon icon={['fab', 'linkedin']} size='lg' />
            </MenuItem>
            <MenuItem width={'25%'}>
              <StyledIcon icon={['fab', 'facebook']} size='lg' />
            </MenuItem>
            <MenuItem width={'25%'}>
              <StyledIcon icon={['fab', 'instagram']} size='lg' />
            </MenuItem>
            <MenuItem width={'25%'}>
              <StyledIcon icon={['fab', 'snapchat-square']} size='lg' />
            </MenuItem>
          </Flex.Row>
        </Flex.Row>
      </StyledMenu>
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