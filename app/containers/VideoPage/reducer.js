import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  data: [],
});

function videoReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state.set('data', ['bacon', 'cheddar', 'balls']);
    default:
      return state;
  }
}

export default videoReducer;
