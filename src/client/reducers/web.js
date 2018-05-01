import {appMode} from '../constants';
import * as actionTypes from '../constants/actionTypes';

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case actionTypes.CHANGE_STYLE_GUIDE_MODE: {
      return {...state, mode: action.payload};
    }
    default: return state;
  }
}

const getInitialState = () => {
  return {
    default: 'loaded',
    mode: appMode.light
  }
}