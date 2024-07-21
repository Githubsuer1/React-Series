import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todoSlice'


// store is like global variable, contains reducers.
export const Store = configureStore({
    reducer:todoReducer
})
