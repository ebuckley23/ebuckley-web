import {appMode} from '../constants';
import * as actionTypes from '../constants/actionTypes';

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case actionTypes.CHANGE_STYLE_GUIDE_MODE: {
      //todo: drive by dropdown
      const mode = state.mode === appMode.light ? appMode.dark : appMode.light;
      return {...state, mode};
    }
    default: return state;
  }
}

const getInitialState = () => {
  return {
    default: 'loaded',
    mode: appMode.ebuckley
  }
}