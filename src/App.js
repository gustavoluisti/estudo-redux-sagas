import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import Info from './info'
import axios from 'axios'

import createSagaMiddleware from 'redux-saga'
import { put } from 'redux-saga/effects'
import { loadDataSuccess } from './action'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
  )
//generators function *
function *ola(){
  console.log('Hello Sparta')
}

function *teste(){
  const dados = yield axios.get('https://httpbin.davecheney.com/ip')
  // console.log(dados)
  yield put(loadDataSuccess(dados.data.origin))
}
sagaMiddleware.run(teste, ola)

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
