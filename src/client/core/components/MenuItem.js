import React from 'react';
import * as Styled from '../styled-components';

export default ({children, onClick, ...rest}) => {
  const menuClick = ({name, to}) => (e => onClick(e, {name, to}));

  return (
    <Styled.MenuItem {...rest} onClick={menuClick(rest)}>
      {children}
    </Styled.MenuItem>
  );
};
