import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_STREAMERS } from './constants';
import { streamersLoaded } from './actions';
import firebase from 'firebase/app';


function fetchStreamers() {
  // const limit = 100;
  // const connectQuery = connectionRef.limitToFirst(limit);

  return new Promise(resolve => {
    const streamList = [];
    const database = firebase.database();
    const connectionRef = database.ref('list');
    const connectQuery = connectionRef.orderByChild('twitchFollowers');
    connectQuery.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        streamList.push(childSnapshot.val());
      });
      resolve(streamList);
    });
  });
}


export function* getStreamers() {
  const snapshot = yield call(fetchStreamers);
  yield put(streamersLoaded(snapshot));
}

export function* getStreamersWatcher() {
  while (yield take(LOAD_STREAMERS)) {
    yield call(getStreamers);
  }
}

export function* streamerData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getStreamersWatcher);

// Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  streamerData,
];
