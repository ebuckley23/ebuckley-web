import React, {PureComponent} from 'react';
import {Flex, Text} from '../common';
import MenuItem from './components/MenuItem';
import * as Styled from './styled-components';
import {menuConfig} from './config';

export default class Menu extends PureComponent {
  state = {
    activeIndex: 0
  }
  componentWillMount() {
    const {location: {pathname = ''}} = this.props;
    const parsedPathName = pathname.replace('/', '');
    parsedPathName && this.setState({activeIndex: menuConfig[parsedPathName]});
  }

  MenuItems = () => {
    const {activeIndex} = this.state;
    return menuConfig.map(({
      displayOrder, name, path, displayName
    }) => (
      <MenuItem
        key={displayOrder}
        name={name}
        to={path}
        active={displayOrder === activeIndex}
        onClick={(e, {to}) => this.navigate(to, path)}
      >
        <Text>{displayName}</Text>
      </MenuItem>
    ));
  }

  navigate = (to, menuItemIndex) => {
    const {history} = this.props;
    this.setState({activeIndex: menuItemIndex}, () => history.push(to));
  }

  render = () => {
    const {actions} = this.props;
    return (
      <Styled.Menu>
        <Styled.HeaderRow alignItems='center'>
          <Styled.NavRow>{this.MenuItems()}</Styled.NavRow>
          <Styled.MobileNavRow>
            <MenuItem onClick={actions.toggleNavDropDown}>
              <Styled.HamburgerIcon />
            </MenuItem>
          </Styled.MobileNavRow>
          <Flex.Row justify='center'>
            <Styled.Image src="https://ebuckley.blob.core.windows.net/images/mabateam.png" />
          </Flex.Row>
          <Styled.NavRow>
            <MenuItem width='25%'>
              <Styled.Icon icon={['fab', 'linkedin']} />
            </MenuItem>
            <MenuItem width='25%'>
              <Styled.Icon icon={['fab', 'facebook']} />
            </MenuItem>
            <MenuItem width='25%'>
              <Styled.Icon icon={['fab', 'instagram']} />
            </MenuItem>
            <MenuItem width='25%'>
              <Styled.Icon icon={['fab', 'snapchat-square']} />
            </MenuItem>
          </Styled.NavRow>
          <Styled.MobileNavRow>
            <MenuItem onClick={actions.toggleSocialDropDown}>
              <Styled.SocialIcon />
            </MenuItem>
          </Styled.MobileNavRow>
        </Styled.HeaderRow>
      </Styled.Menu>
    );
  }
}
