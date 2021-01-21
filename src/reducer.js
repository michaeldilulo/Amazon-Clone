export const initialState = {
    basket: [],
    user: null
}

const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TO_BASKET':
            //logic for adding item to basket
            return {state}
        case 'REMOVE_FROM_BASKET':
            //logic for removing item from basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        default:
            return state;
    }
}

export default reducer;