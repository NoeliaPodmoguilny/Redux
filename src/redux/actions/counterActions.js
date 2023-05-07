
export const counterIncrease = state => { state.count++ }

export const counterDecrease = state => { 
    state.count -= 2
    state.timer++
}

export const counterIncreaseByAmount = (state, actions) => {
    state.count += actions.payload //elem que le pasamos por parametro
    state.timer += actions.payload ** 2 //sumamos el cuadrado del mismo
}