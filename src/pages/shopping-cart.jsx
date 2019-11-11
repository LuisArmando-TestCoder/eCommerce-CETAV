import React, { useState } from 'react';
import Layout from '../components/layout';
import CartProduct from '../components/cart-product';
import movePropValue from '../services/movePropValue';
import saveLocal from '../services/saveLocal';

function activateCheckout() {
    // something
}

export default props => {
    const [products, setProducts] = useState(props.cart);
    products.forEach(product => !product.itemsAmount ? product.itemsAmount = 1 : null);

    function saveChanges() {
        setProducts(JSON.parse(JSON.stringify(products)));
        saveLocal(products).in('cart');
    }

    return (
        <Layout>
            <h2>Cart</h2>
            {products.map((product, i) => <CartProduct key={i} // issue when page changes
                trigger={saveChanges}
                deleteFrom={() => {
                    props.cart.splice(i, 1);
                    products.splice(i, 1);
                }}
                itemsAmount={products[i].itemsAmount}
                decrease={() => movePropValue({obj: product, name: 'itemsAmount', to: -1})}
                increase={() => movePropValue({obj: product, name: 'itemsAmount', to: 1})}
            {...product} />)}
            {products.length ?
                <div>
                    <button onClick={activateCheckout}>Checkout</button>
                    <i>Subtotal:  {products.map(a => a.itemsAmount * a.price).reduce((a, b) => a + b)}</i>
                </div>
            : null}
        </Layout>
    );
}