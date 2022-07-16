const initialstate = {
    show: [],
    save: [],
}
export const bookReducer = (state = initialstate, action) => {

    switch (action.type) {
        case "FETCH_BOOKS":
            const Data = action.value.items; // payload or value write any thing //
            return {
                ...state,
                show: action.value.items,
            };

        case "SAVE_BOOKS":

            const savedbooks = state.save.find((item) =>
                item.id === action.value.id ? true : false);
            const item = action.value;
            console.log(item);
            return {
                ...state,
                save: savedbooks ? state.save.map((item) =>
                    item.id === action.value.id)
                    : [...state.save, { ...item }],
            }
        default:
            return state;
    }
}


