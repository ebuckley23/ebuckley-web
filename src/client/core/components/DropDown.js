import React, {PureComponent} from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
// TODO: This library is too big and complex for my needs
// Figure out how to create my own
import Animated, {FadeAnimations} from 'animated-styled-components';
import colors from '../../common/colors';
import * as Styled from '../styled-components';
import MenuItem from './MenuItem';
import {Flex, Text} from '../../common';

const {
  mabablue, lightgrey, black
} = colors;

const bgColor = theme('mode', {
  light: lightgrey,
  dark: 'darkGrey',
  ebuckley: mabablue
});

const StyledFlex = styled(Flex)`
  border-bottom: 1px solid ${black};
  background-color: ${bgColor};

  &:first-child {
    margin-top: -.5em;
    padding-top: -.5em;
  }
  &:last-child {
    border-bottom: none;
  }
`;

const StyledAnimated = styled(Animated).attrs({
  animation: {
    delay_in: 1,
    in: FadeAnimations.FadeInTop,
    duration_in: 1
  },
  transitions: [
    {
      type: 'hover',
      from: { property: 'border-radius', value: 0 },
      to: { property: 'border-radius', value: 10 }
    }
  ]
})`
`;

export default class DropDown extends PureComponent {
  render = () => {
    const {
      options = [], toggled = false, history, onAfterClick = () => {}
    } = this.props;
    const items = options.map(({name, path, displayName}) => (
      <StyledFlex key={name}>
        <MenuItem
          name={name}
          to={path}
          onClick={() => {
            history.push(path);
            onAfterClick();
          }}
        >
          <Text>{displayName}</Text>
        </MenuItem>
      </StyledFlex>
    ));
    return (
      <Styled.DropDownContainer {...{toggled}}>
        <StyledAnimated>
          {items}
        </StyledAnimated>
      </Styled.DropDownContainer>
    );
  }
}
