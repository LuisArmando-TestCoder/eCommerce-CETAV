const actions = action => ({
    'PRODUCTS'() {
        return action.products;
    },
    'SHOPPING_CART'() {
        return action.cart;
    },
    'NOT_FOUND_FEELING'() {
        return action.feeling;
    }
});

export default (state, action) => {
    if(actions()[action.type])
        return actions(action)[action.type]();
    return state;   
}
