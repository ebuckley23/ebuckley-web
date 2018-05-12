import React, {PureComponent} from 'react';

export default function asyncComponent(importComponent) {
  class AsyncComponent extends PureComponent {
    state = {
      component: null
    }

    async componentWillMount() {
      const {default: component} = await importComponent();

      this.setState({
        component
      });
    }

    render() {
      const Component = this.state.component;
      return Component ? <Component {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}
