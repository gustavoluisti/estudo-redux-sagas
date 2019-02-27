import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import Info from './info'
import axios from 'axios'

import createSagaMiddleware from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'
import { loadDataSuccess } from './action'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
  )

function *getIP(){
  const dados = yield axios.get('https://httpbin.davecheney.com/ip')
  // console.log(dados)
  yield put(loadDataSuccess(dados.data.origin))
}

//generators function *
function *index(){
  console.log('Hello Sparta')
  yield takeEvery('LOAD_DATA_REQUEST', getIP)
}

sagaMiddleware.run(index)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div >
          <Info />
        </div>
      </Provider>
      
    );
  }
}

export default App;
