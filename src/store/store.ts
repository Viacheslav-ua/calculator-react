import { combineReducers, configureStore } from '@reduxjs/toolkit'
import calculationsSlice from './reducers/CalculationsSlice'

const rootReducer = combineReducers({
  calculationsSlice,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType< typeof rootReducer >
export type AppStore = ReturnType< typeof setupStore >
export type AppDispatch = AppStore['dispatch']