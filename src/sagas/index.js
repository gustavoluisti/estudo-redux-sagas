import { takeLatest } from 'redux-saga/effects'
import getIP from './ipSagas'

function *index(){
    console.log('Hello Sparta')
    yield takeLatest('LOAD_DATA_REQUEST', getIP)
  }

  export default index