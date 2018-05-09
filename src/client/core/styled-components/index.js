import styled from 'styled-components';
import {media} from '../../constants';
import colors from '../../common/colors';
import theme from 'styled-theming';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {Flex} from '../../common';

const {mabared, mabagrey, mabablue, lightgrey, black, grey} = colors;

const firstGradient = theme('mode', {
  light: mabablue,
  dark: black,
  ebuckley: mabared
});
const secondGradient = theme('mode', {
  light: lightgrey,
  dark: grey,
  ebuckley: mabagrey
});
const thirdGradient = theme('mode', {
  light: mabablue,
  dark: black,
  ebuckley: mabablue
});

export const Menu = styled.header`
  position: relative;
  height: 10em;
  background-image: linear-gradient(${firstGradient}, ${secondGradient}, ${thirdGradient});
  border-bottom-left-radius: 50% 20%;
  border-bottom-right-radius: 50% 20%;
`;

export const MenuItem = styled.a`
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

export const Image = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
`;

export const Icon = styled(FontAwesomeIcon)`
  flex: 1;
  color: white;
  cursor: pointer;
`;

export const HeaderRow = styled(Flex.Row)`
  height: inherit;
`;