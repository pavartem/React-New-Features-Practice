import {takeEvery, call, put} from 'redux-saga/effects';

import {SEARCH} from '../constants/index';
import {setSearchData, setSearchError} from "../actions";

async function searchApiCall() {
    try {
        const rawResponse = await fetch('hotels.json');
        return await rawResponse.json();
    } catch (e) {
        return new Error(e);
    }
}

function* handleHotelsLoad() {
    try {
        const authData = yield call(() => searchApiCall());
        yield put(setSearchData(authData.hotels));
    } catch (e) {
        yield put(setSearchError(e));
    }
}


function* rootSaga() {
    yield takeEvery(SEARCH.SEARCH, handleHotelsLoad);
}


export default rootSaga;
