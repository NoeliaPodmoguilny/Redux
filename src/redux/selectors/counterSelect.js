

export const counterSelect = state => {
    return {
        count: state.counter.count,
        timer: state.counter.timer
    }
}
