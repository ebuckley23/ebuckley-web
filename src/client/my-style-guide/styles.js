import React, {PureComponent} from 'react';
import {themeVariantTypes} from '../constants';
import {Text} from '../common';

export default function renderStyles(Component) {
  return class extends PureComponent {
    render() {
      const {children, ...rest} = this.props;
      return (
        Object.values(themeVariantTypes).reduce((acc, variant, idx) => {
          const style = (
            <div key={idx}>
              <Text.Label>{variant}</Text.Label>
              <Component {...{...rest, variant}}>
                {children}
              </Component>
            </div>
          );
          return acc.concat(style);
        }, [])
      )
    }
  }
}