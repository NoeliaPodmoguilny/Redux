//aca creamos un slice de donde vamos a producir los reducers
import { createSlice } from "@reduxjs/toolkit";
import { counterDecrease, counterIncrease, counterIncreaseByAmount } from "../actions/counterActions";

//createSlice recibe 3 elementos: nombre, estado inicial, reducer(que es un obj con las dif Fn que podemos ejecutar del mismo)
const name = 'counter'

const initialState = {count: 0, timer: 0}

const reducers = {
    //fn que sube 1 solo valor
    increase: counterIncrease, //action
    decrease: counterDecrease,
    byAmount: counterIncreaseByAmount,
}


const slice = createSlice({name, initialState, reducers})

export const { increase, decrease, byAmount} = slice.actions
export const counterReducer = slice.reducer