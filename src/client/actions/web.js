import {api} from '../utils/api';
import * as actionTypes from '../constants/actionTypes';

export const getEbuckley = () => ({
  type: actionTypes.GET_EBUCKLEY,
  payload: api('/ebuckley').then(res => res.json())
})