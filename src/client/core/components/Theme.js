import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {ThemeProvider} from 'styled-components';

export class Theme extends PureComponent {
  render() {
    const {children, mode} = this.props;
    return (
      <ThemeProvider theme={{mode}}>
        {children}
      </ThemeProvider>
    );
  }
}

const mapState = state => ({
  mode: state.web.mode
});

export default connect(mapState)(Theme);
