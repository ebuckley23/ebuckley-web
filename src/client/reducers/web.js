import {appTheme} from '../constants';
import * as actionTypes from '../constants/actionTypes';

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case actionTypes.CHANGE_STYLE_GUIDE_MODE: {
      //todo: drive by dropdown
      const mode = state.mode === appTheme.light ? appTheme.dark : appTheme.light;
      return {...state, mode};
    }
    case actionTypes.CHANGE_THEME: {
      return {...state, mode: action.payload}
    }
    default: return state;
  }
}

const getInitialState = () => {
  return {
    default: 'loaded',
    mode: appTheme.ebuckley
  }
}