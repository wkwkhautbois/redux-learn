const initialState = {
    count: 32
};

// actionの型はややこしいので、とりあえずanyにしておく
const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "INCREASE_COUNT":
            return {
                ...state,
                count: state.count + 1
            };
        default:
            return state;
    }
};

export default reducer;