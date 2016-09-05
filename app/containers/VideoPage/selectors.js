import { createSelector } from 'reselect';

const selectVideoDomain = () => state => state.get('videoPage');

const selectVideo = () => createSelector(
  selectVideoDomain(),
  (substate) => substate.toJS()
);

export default selectVideo;
export {
  selectVideoDomain,
};
