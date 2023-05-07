import { createSlice } from "@reduxjs/toolkit"
import { cryptoEndLoading, cryptoGetPrice, cryptoSetCrypt, cryptoSetService, cryptoStartLoading } from "../actions/cryptoActions"

const name = 'crypto'

const initialState = {
    crypt: 'bitcoin',
    loading: false,
    state: null,
    price: 0
}

const reducers = {
    setCrypt: cryptoSetCrypt,
    startLoading: cryptoStartLoading,
    endLoading: cryptoEndLoading,
    stateService: cryptoSetService,
    getPrice: cryptoGetPrice,
}

const slice = createSlice({ name, initialState, reducers })

export const { 
    setCrypt, 
    startLoading, 
    endLoading, 
    stateService, 
    getPrice 
} = slice.actions

export const cryptoReducer = slice.reducer