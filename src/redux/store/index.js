
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import queenMusic from '../reducers/indexx'

import playReducer from '../reducers/play'

const bigReducer= combineReducers({
  queen : queenMusic,
  play : playReducer

})

const store = configureStore({
  reducer: bigReducer
})

export default store