import React, {PureComponent} from 'react';
import {Button, Input, Text, Container, Flex, Select} from '../common';
import {themeVariantTypes} from '../constants';
import * as styleGuideActions from '../actions/my-style-guide';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import renderStyles from './renderStyles';

class MyStyleGuide extends PureComponent {
  render() {
    const {mode, web, actions} = this.props;
    const ButtonStyles = renderStyles(Button);
    const InputStyles = renderStyles(Input);
    const TextStyles = renderStyles(Text);
    const SelectStyles = renderStyles(Select);
    return (
      <Container>
        <Text.H1>Style Guide and Themes</Text.H1>
        <Text.H2>Buttons</Text.H2>
        <Flex.Row>
          <ButtonStyles>A Button!</ButtonStyles>
        </Flex.Row>
        <Text.H2>Input</Text.H2>
        <Flex.Row>
          <InputStyles placeholder={'Enter Text'}/>
        </Flex.Row>
        <Text.H2>Text</Text.H2>
        <Flex.Row>
          <TextStyles>Emmanuel</TextStyles>
        </Flex.Row>
        <Text.H2>Select</Text.H2>
        <Flex.Row>
          <SelectStyles
            placeholder={'Select ...'}
            options={[{display: 'Emmanuel', value: 1}, {display: 'Another Val', value: 2}]}/>
        </Flex.Row>
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
