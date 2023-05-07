export const cryptoStartLoading = state => { state.loading = true }
export const cryptoEndLoading = state => { state.loading = false }
export const cryptoSetService = (state, action) => { state.state = action.payload }
export const cryptoSetCrypt = (state, action) => { state.crypt = action.payload }
export const cryptoGetPrice = (state, action) => {
    const { ars, usd } = state.price = action.payload.maket_data.current_price
}