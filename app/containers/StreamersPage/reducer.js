import { fromJS } from 'immutable';
import {
  LOAD_STREAMERS,
  LOAD_STREAMERS_SUCCESS,
  LOAD_STREAMERS_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  streamers: [],
});

function streamersPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_STREAMERS:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_STREAMERS_SUCCESS:
      return state
        .setIn(['streamers'], action.names)
        .set('loading', false)
        .set('error', false);
    case LOAD_STREAMERS_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default streamersPageReducer;
