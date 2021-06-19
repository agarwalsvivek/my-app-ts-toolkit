import {takeLatest} from 'redux-saga/effects';
import { incrementAsync, incrementIfOdd } from '../../features/counter/counterSlice';
import { handleIncrementAsync, handleIncrementIfOdd } from './handler/counter';

export function* watcherSaga() {
	yield takeLatest(incrementAsync.type, handleIncrementAsync);
	yield takeLatest(incrementIfOdd.type, handleIncrementIfOdd);
}