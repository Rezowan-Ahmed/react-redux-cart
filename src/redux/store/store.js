const { createStore } = require("redux")
const { default: cartReducers } = require("../reducers/cartReducers")

export const store = createStore(cartReducers);