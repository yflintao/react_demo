import {put,call,takeEvery} from 'redux-saga/effects';
import {http} from "@/utils";

function* watchSaga(){
    yield takeEvery('ASYNC_USER_INFO',fetchData);
    yield takeEvery('ASYNC_CHANNEL_INFO',fetchChannel);
}

export function* fetchData (){
    try {
        const record = yield call(asyncUserInfo);
        yield put({
            type:'get_user_info',
            payload:record
        })
    }catch (error) {
        console.log(error);
    }
}

async function asyncUserInfo(){
    // 调用接口获取数据
    const res = await http.get('/admin/userInfo');
    return res.data;
}

//channel
export function* fetchChannel(){
    try {
        const record = yield call(asyncChannelInfo);
        yield put({
            type:'get_channel_info',
            payload:record
        })
    }catch (error) {
        console.log(error);
    }
}

async function asyncChannelInfo(){
    // 调用接口获取数据
    const {data} = await http.get('/category/index');
    return data || [];
}

export default watchSaga;