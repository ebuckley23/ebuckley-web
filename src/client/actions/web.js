import {api} from '../utils/api';
import * as actionTypes from '../constants/actionTypes';

export const getEbuckley = () => ({
  type: actionTypes.GET_EBUCKLEY,
  payload: api('/ebuckley').then(res => res.json())
});

export const changeTheme = (theme) => ({
  type: actionTypes.CHANGE_THEME,
  payload: theme
});

export const toggleNavDropDown = () => ({
  type: actionTypes.TOGGLE_NAV_DROPDOWN
});

export const toggleSocialDropDown = () => ({
  type: actionTypes.TOGGLE_SOCIAL_DROPDOWN
});