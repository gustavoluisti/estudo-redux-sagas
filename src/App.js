import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import Info from './info'

import createSagaMiddleware from 'redux-saga'
import indexSagas from './sagas/index'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
  )

sagaMiddleware.run(indexSagas)

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
