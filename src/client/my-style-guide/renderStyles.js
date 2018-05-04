import React, {PureComponent} from 'react';
import {themeVariantTypes} from '../constants';
import {Text, Flex} from '../common';

export default function renderStyles(Component) {
  return class extends PureComponent {
    render() {
      const {children, ...rest} = this.props;
      return (
        themeVariantTypes.reduce((acc, variant, idx) => {
          const style = (
            <Flex.Column key={idx} flex={1}>
              <Text.Label decoration={'underline'}>{variant}</Text.Label>
              <Component {...{...rest, variant}}>
                {children}
              </Component>
            </Flex.Column>
          );
          return acc.concat(style);
        }, [])
      )
    }
  }
}