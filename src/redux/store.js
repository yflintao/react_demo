import {legacy_createStore as createStore,applyMiddleware,compose} from 'redux'
import reducers from './reducers'
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import watchSaga from "@/redux/saga"; // defaults to localStorage for web

//redux 持久化,将redux保存到本地
const persistConfig = {
    key: 'redux-persist',
    storage,
    // whitelist: ['userReducer','channelReducer'],
    blacklist: ['loadingReducer']
}

const sagaMiddleware = createSagaMiddleware()
const persistedReducer = persistReducer(persistConfig, reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(persistedReducer,enhancer)
sagaMiddleware.run(watchSaga);
const persistor = persistStore(store)

export {
    store,persistor
}