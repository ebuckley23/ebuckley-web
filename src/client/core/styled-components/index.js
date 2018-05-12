import styled from 'styled-components';
import {media} from '../../constants';
import colors from '../../common/colors';
import theme from 'styled-theming';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {Flex, Container} from '../../common';

const {mabared, mabagrey, mabablue, lightgrey, black, grey, white} = colors;

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

const shadowColor = theme('mode', {
  light: lightgrey,
  dark: white,
  ebuckley: mabagrey
});

const imageBorderColor = theme('mode', {
  light: lightgrey,
  dark: white,
  ebuckley: mabagrey
})

export const Menu = styled.header`
  position: relative;
  height: 10em;
  background-image: linear-gradient(${firstGradient}, ${secondGradient}, ${thirdGradient});
  border-bottom-left-radius: 50% 20%;
  border-bottom-right-radius: 50% 20%;
  border-bottom: 1px solid ${white};
  box-shadow: 0 8px 6px -6px ${shadowColor};
  z-index: 3;
`;

export const MenuItem = styled.a`
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  border-radius: 4px;
  cursor: pointer;
  flex: 1;
`;

export const Image = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: 1px inset ${imageBorderColor};
  box-shadow: 2px 3px 10px;

  :hover {
    box-shadow: 2px 3px 10px white;
  }
`;

export const Icon = styled(FontAwesomeIcon).attrs({
  size: '2x'
})`
  flex: 1;
  color: white;
  cursor: pointer;
`;

export const HamburgerIcon = styled(Icon).attrs({
  icon: 'bars'
})``;

export const SocialIcon = styled(Icon).attrs({
  icon: 'user-plus'
})``;

export const HeaderRow = styled(Flex.Row)`
  height: inherit;
`;

export const MainContainer = styled(Container)`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  min-height: 80vh;
  height: inherit;
  margin-top: -1em;
  padding-top: 1em;
  position: relative;
  z-index: 1;

  /* bootstrap queries*/
  @media (min-width: 360px) {
    max-width: 340px;
  }

  @media (min-width: 564px) {
    max-width: 450px;
  }

  /* // Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    max-width: 640px;
  }

  /* // Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    max-width: 800px;
  }

  /* // Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    max-width: 1000px;
  }
`;

export const DropDownContainer = styled.div`
  margin: auto;
  width: 50%;
  height: max-content;
  display: ${props => props.toggled ? 'flex' : 'none'};
  flex-direction: column;
  background-color: transparent;
  opacity: .95;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 2;

  @media (min-width: 768px) {
    display: none;
  }

  @media (max-width: 379px) {
    width: 75%;
  }
`;

export const NavRow = styled(Flex.Row)`
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileNavRow = styled(Flex.Row)`
  justify-content: center;
  @media (min-width: 768px) {
    display: none;
  }
`;