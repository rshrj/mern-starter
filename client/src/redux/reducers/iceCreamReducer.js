import {
  ICECREAM_ADD_START,
  ICECREAM_LOAD_START,
  ICECREAM_ADD_SUCCESS,
  ICECREAM_LOAD_SUCCESS,
  ICECREAM_ADD_FAIL,
  ICECREAM_LOAD_FAIL
} from '../actions/iceCream.types';

const initialState = {
  iceCreams: [],
  loading: false,
  errors: []
};

export default function (state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case ICECREAM_LOAD_START:
      return {
        ...state,
        loading: true
      };
    case ICECREAM_LOAD_SUCCESS:
      return {
        ...state,
        iceCreams: payload,
        loading: false
      };
    case ICECREAM_LOAD_FAIL:
      return {
        ...state,
        iceCreams: [],
        errors: payload,
        loading: false
      };
    case ICECREAM_ADD_START:
      return {
        ...state,
        loading: true
      };
    case ICECREAM_ADD_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case ICECREAM_ADD_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload
      };
    default:
      return state;
  }
}
