export const initialState = {
    basket: [],
    user: null
}

// main purpose of a selector is you can call it and it will give you the total
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state, 
                user: action.user
            }
        case 'ADD_TO_BASKET':
            //logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            //logic for removing item from basket

            let newBasket = [...state.basket]
            
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            
            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.log(">>>>> CANNOT REMOVE FROM BASKET");
            }

            return { ...state, basket: newBasket}
        default:
            return state;
    }
}

export default reducer;