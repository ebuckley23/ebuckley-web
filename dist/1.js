(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{121:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l=i(r(2)),o=r(23),u=(r(8),i(r(124))),a=r(20),c=r(34),f=(n=r(123))&&n.__esModule?n:{default:n};function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p=(0,c.connect)(e=>({web:e.web}),e=>({actions:(0,a.bindActionCreators)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){d(e,t,r[t])})}return e}({},u),e)}))(class extends l.PureComponent{render(){const{mode:e,web:t,actions:r}=this.props,n=(0,f.default)(o.Button),u=(0,f.default)(o.Input),a=(0,f.default)(o.Text),c=(0,f.default)(o.Select);return l.default.createElement(l.default.Fragment,null,l.default.createElement(o.Text.H1,null,"Style Guide and Themes"),l.default.createElement(o.Text.H2,null,"Buttons"),l.default.createElement(o.Flex.Row,null,l.default.createElement(n,null,"A Button!")),l.default.createElement(o.Text.H2,null,"Input"),l.default.createElement(o.Flex.Row,null,l.default.createElement(u,{placeholder:"Enter Text"})),l.default.createElement(o.Text.H2,null,"Text"),l.default.createElement(o.Flex.Row,null,l.default.createElement(a,null,"Emmanuel")),l.default.createElement(o.Text.H2,null,"Select"),l.default.createElement(o.Flex.Row,null,l.default.createElement(c,{placeholder:"Select ...",options:[{display:"Emmanuel",value:1},{display:"Another Val",value:2}]})))}});t.default=p},123:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return class extends n.PureComponent{render(){const t=this.props,{children:r}=t,a=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}(t,["children"]);return l.themeVariantTypes.reduce((t,l,c)=>{const f=n.default.createElement(o.Flex.Column,{key:c,flex:1},n.default.createElement(o.Text.Label,{decoration:"underline"},l),n.default.createElement(e,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){u(e,t,r[t])})}return e}({},a,{variant:l}),r));return t.concat(f)},[])}}};var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(2)),l=r(8),o=r(23);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},124:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.changeMode=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(43));t.changeMode=(e=>({type:n.CHANGE_STYLE_GUIDE_MODE,payload:e}))}}]);