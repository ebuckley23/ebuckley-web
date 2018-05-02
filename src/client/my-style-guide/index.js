import React, {PureComponent} from 'react';
import {Button, Input, Text, Container} from '../common';
import {themeVariantTypes} from '../constants';
import * as styleGuideActions from '../actions/my-style-guide';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import renderStyles from './styles';

export class MyStyleGuide extends PureComponent {
  render() {
    const {mode, web, actions} = this.props;
    const ButtonStyles = renderStyles(Button);
    const InputStyles = renderStyles(Input);
    const TextStyles = renderStyles(Text);
    return (
      <Container>
        <Text.H1>Style Guide and Themes</Text.H1>
        <button onClick={() => actions.changeMode()}>{`Theme - ${web.mode}`}</button>
        <Text.H2>Buttons</Text.H2>
        <ButtonStyles>A Button!</ButtonStyles>
        <Text.H2>Input</Text.H2>
        <InputStyles placeholder={'Enter Text'}/>
        <Text.H2>Text</Text.H2>
        <TextStyles>Emmanuel</TextStyles>
      </Container>
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
