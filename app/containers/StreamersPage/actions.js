// import fetch from 'isomorphic-fetch';

import {
  LOAD_STREAMERS,
  LOAD_STREAMERS_SUCCESS,
  LOAD_STREAMERS_ERROR,
} from './constants';

export function loadStreamers() {
  return {
    type: LOAD_STREAMERS,
  };
}

export function streamersLoaded(names) {
  return {
    type: LOAD_STREAMERS_SUCCESS,
    names,
  };
}

export function streamersLoadingError(error) {
  return {
    type: LOAD_STREAMERS_ERROR,
    error,
  };
}
