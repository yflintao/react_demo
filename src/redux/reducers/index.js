import {combineReducers} from 'redux'
import loadingReducer from './loadingReducer'
import userReducer from './userReducer'
import channelReducer from './channelReducer'
export default combineReducers({
    loadingReducer,
    userReducer,
    channelReducer
})
