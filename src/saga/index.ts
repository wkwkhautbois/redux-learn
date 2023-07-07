import { all, fork, takeEvery } from 'redux-saga/effects';

function* increaseCountSideEffect() {

    // 長い処理の代わり
    setTimeout(function() {
        console.log("長い処理が終わったよ")
    }, 2000);
}

function* watchIncreaseCount() {
    yield takeEvery('INCREASE_COUNT', increaseCountSideEffect);
}

function* saga() {
    yield all([
        fork(watchIncreaseCount),
    ]);
}

export default saga
