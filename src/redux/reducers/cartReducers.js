// const { act } = require("react-dom/test-utils");
const { ADD_TO_CART, REMOVE_FROM_CART } = require("../actions/cartActions");

const initialState = {
    cart: [],
    products: [{name: 'Lenovo laptop', id: 1},
    {name: 'Asus Laptop', id: 2},
    {name: 'Dell laptop', id: 3},
    {name: 'HP laptop', id: 4},
    {name: 'Toshiba Laptop', id: 5}]
}

const cartReducers = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            // return {
            //     cart: [...state.cart, action.id]
            // }
            const newItem = {
                productId: action.id, 
                name: action.name,
                cartId: state.cart.length + 1
            }
            const newCart = [...state.cart, newItem];
            return {...state, cart: newCart};

        case REMOVE_FROM_CART:
            const removeId = action.id;
            const newRemoveCart = state.cart.filter(item => item.cartId !== removeId);
            return {...state, cart: newRemoveCart};
        default:
            return state;
    }
}

export default cartReducers;