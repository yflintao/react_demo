import { HashRouter } from 'react-router-dom'
import { Suspense } from 'react'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import MRouter from '@/router/index'

const App = () => {
    return (
        // 路由配置
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <HashRouter>
                    <div className="App">
                        <Suspense
                            fallback={<div className='wh100 flexColumnCenter'>Loading...</div>}
                        >
                            <MRouter></MRouter>
                        </Suspense>
                    </div>
                </HashRouter>
            </PersistGate>
        </Provider>
    )
}

export default App
