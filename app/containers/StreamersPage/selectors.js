import { createSelector } from 'reselect';

/**
 * Direct selector to the streamersPage state domain
 */
const selectStreamersPageDomain = () => state => state.get('streamersPage');


const selectStreamersPage = () => createSelector(
  selectStreamersPageDomain(),
  (substate) => substate.toJS()
);

export default selectStreamersPage;
export {
  selectStreamersPageDomain,
};
