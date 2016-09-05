import expect from 'expect';
import streamersPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('streamersPageReducer', () => {
  it('returns the initial state', () => {
    expect(streamersPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
