import { createStore, applyMiddleware, compose } from 'redux';
import penderMiddleware from 'redux-pender';
import reducer from './reducers';

const isDevelopment = process.env.NODE_ENV === 'development'; // 환경이 개발모드인지 확인합니다
const composeEnhancers = isDevelopment ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;

// Todo: 미들웨어, react-hot-loader 적용
const configureStore = (initialState) => {
    const store = createStore(reducer, initialState, composeEnhancers(
        applyMiddleware(penderMiddleware())
    ));

    // hot-reloading 를 위한 코드
    if(module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
// https://backend-intro.vlpt.us/6/02.html
export default configureStore;

// import { createStore, applyMiddleware, compose } from 'redux';
// import reducer from './reducers';
// import ReduxThunk from 'redux-thunk';
//
// const configureStore = () => {
//     // const store = createStore(reducer);
//     // for debugging
//     const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
//
//     // Async 실행을 위해 ReduxThunk 미들웨어 추가
//     const store = createStore(reducer, devTools ? compose(applyMiddleware(ReduxThunk), devTools) : applyMiddleware(ReduxThunk));
//     return store;
// }
//
// export default configureStore;
