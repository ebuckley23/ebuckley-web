import React, {PureComponent} from 'react';
import {Button} from '../common';
import {themeVariantTypes} from '../constants';
import * as styleGuideActions from '../actions/my-style-guide';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

export class MyStyleGuide extends PureComponent {
  render() {
    const {mode, web, actions} = this.props;
    return (
      <>
        <h1>Style Guide and Themes</h1>
        <button onClick={() => actions.changeMode('dark')}>{`Theme - ${web.mode}`}</button>
        <h2>Buttons</h2>
        {Object.values(themeVariantTypes).map((variant, idx) => {
          return (
            <div key={idx}>
              <label>{variant}</label>
              <Button {...{variant}}>TEXT</Button>
            </div>
          )
        })}
      </>
    );
  }
}

const mapState = (state) => {
  return {
    web: state.web
  }
}

const mapActions = (dispatch) => {
  return {
    actions: bindActionCreators({...styleGuideActions}, dispatch)
  }
}

export default connect(mapState, mapActions)(MyStyleGuide);
