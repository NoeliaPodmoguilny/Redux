import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from '../reducers/counterReducer'
import { cryptoReducer } from '../reducers/cryptoReducer'

const reducer = { 
    counter: counterReducer, 
    cripto: cryptoReducer
}

export const store = configureStore({ reducer })