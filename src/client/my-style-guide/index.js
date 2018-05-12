import React from 'react';
import renderStyles from './renderStyles';
import {Button, Input, Text, Flex, Select} from '../common';

export default () => {
  const ButtonStyles = renderStyles(Button);
  const InputStyles = renderStyles(Input);
  const TextStyles = renderStyles(Text);
  const SelectStyles = renderStyles(Select);
  return (
    <React.Fragment>
      <Text.H1>Style Guide and Themes</Text.H1>
      <Text.H2>Buttons</Text.H2>
      <Flex.Row>
        <ButtonStyles>A Button!</ButtonStyles>
      </Flex.Row>
      <Text.H2>Input</Text.H2>
      <Flex.Row>
        <InputStyles placeholder='Enter Text' />
      </Flex.Row>
      <Text.H2>Text</Text.H2>
      <Flex.Row>
        <TextStyles>Emmanuel</TextStyles>
      </Flex.Row>
      <Text.H2>Select</Text.H2>
      <Flex.Row>
        <SelectStyles
          placeholder='Select ...'
          options={[{display: 'Emmanuel', value: 1}, {display: 'Another Val', value: 2}]}
        />
      </Flex.Row>
    </React.Fragment>
  );
};
