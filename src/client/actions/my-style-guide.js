import * as actionTypes from '../constants/actionTypes';

export const changeMode = (mode) => {
  return {
    type: actionTypes.CHANGE_STYLE_GUIDE_MODE,
    payload: mode
  }
}