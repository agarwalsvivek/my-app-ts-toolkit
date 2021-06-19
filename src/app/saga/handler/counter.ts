import { AxiosResponse } from 'axios';
import {call, put} from 'redux-saga/effects';
import { fetchCount} from '../request/counterAPI';
import {incrementByAmount} from '../../../features/counter/counterSlice'
import { RootState } from '../../store';

export function* handleIncrementAsync(action:any) {
	try {		
		console.log("handleIncrementAsync", action)
		const response:AxiosResponse = yield call(fetchCount);
		yield put(incrementByAmount(response.data));

	} catch(e) {
		console.log("error ", e)
	}
}

export const selectCount = (state: RootState) => state.counter.value;

export function* handleIncrementIfOdd(action:any) {	
	const amount = action.payload;
   	if (amount % 2 === 1) {
		const response:AxiosResponse = yield call(fetchCount);
		yield put(incrementByAmount(response.data));
   	}
}