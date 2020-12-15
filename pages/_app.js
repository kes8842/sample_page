import React from "react";
import withReduxSaga from "next-redux-saga"; // next와 redux-saga를 연결하기 위한 라이브러리
import configureStore from "../store/store";

const Test = ({ Component, store }) => {
  return <Component {...store} />;
};

export default configureStore.withRedux(withReduxSaga(Test));
