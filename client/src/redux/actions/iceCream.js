import axios from 'axios';

import {
  ICECREAM_ADD_START,
  ICECREAM_ADD_SUCCESS,
  ICECREAM_ADD_FAIL,
  ICECREAM_LOAD_START,
  ICECREAM_LOAD_SUCCESS,
  ICECREAM_LOAD_FAIL
} from './iceCream.types';

export const loadIceCreams = () => async (dispatch) => {
  dispatch({
    type: ICECREAM_LOAD_START
  });
  try {
    let res = await axios.get('/api/icecream');
    dispatch({
      type: ICECREAM_LOAD_SUCCESS,
      payload: res.data.iceCreams
    });
  } catch (err) {
    dispatch({
      type: ICECREAM_LOAD_FAIL,
      payload: [err]
    });
  }
};

export const addIceCream = (name, flavor, price, url) => async (dispatch) => {
  dispatch({
    type: ICECREAM_ADD_START
  });
  let body = JSON.stringify({ name, flavor, price, url });
  let options = { headers: { 'Content-Type': 'application/json' } };
  try {
    await axios.post('/api/icecream', body, options);
    dispatch({
      type: ICECREAM_ADD_SUCCESS
    });
    dispatch(loadIceCreams());
  } catch (err) {
    dispatch({
      type: ICECREAM_ADD_FAIL,
      payload: [err.response.data]
    });
  }
};
