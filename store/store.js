import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "../sagas";

const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware(); // 리덕스 사가 생성
  const middlewares = [sagaMiddleware]; // 미들웨어 연결
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, initialState, enhancer); // enhancer에 넣어서 saga가 적용된 store 생성
  store.sagaTask = sagaMiddleware.run(rootSaga); // store에 rootSaga를 넣은 sagaMiddleware를 실행시켜준다.
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development,",
});

export default wrapper;
