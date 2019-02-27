import axios from 'axios'
import { put } from 'redux-saga/effects'

import { loadDataSuccess } from '../action'

function *getIP(){
    const dados = yield axios.get('https://httpbin.davecheney.com/ip')
    // console.log(dados)
    yield put(loadDataSuccess(dados.data.origin))
  }

  export default getIP