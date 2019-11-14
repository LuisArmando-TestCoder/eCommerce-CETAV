import React, { useState } from 'react';
import Layout from '../components/layout';
import CartProduct from '../components/cart-product';
import movePropValue from '../services/movePropValue';
import saveLocal from '../services/saveLocal';

export default props => {
    const [products, setProducts] = useState(props.cart);
    const [modal, setModal] = useState({
        show: false,
        message: `Buying`,
        buttons: [
            {
                action() {
                    modal.show = false;
                    setModal({...modal});
                },
                content: 'Finish',
            }
        ]
    });

    products.forEach(product => !product.itemsAmount ? product.itemsAmount = 1 : null);

    function getSubtotal() {
        return products.length ? products.map(a => a.itemsAmount * a.price).reduce((a, b) => a + b) : 0;
    }

    function saveChanges() {
        setProducts([...props.cart]);
        saveLocal(products).in('cart');
    }
    // https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260
    return (
        <Layout modal={modal}>
            <h2>Cart</h2>
            <div className='products'>
                {products.map((product, i) => <CartProduct key={i}
                    trigger={saveChanges}
                    deleteFrom={() => props.cart.splice(i, 1)}
                    itemsAmount={products[i].itemsAmount}
                    decrease={() => movePropValue({obj: product, name: 'itemsAmount', to: -1})}
                    increase={() => movePropValue({obj: product, name: 'itemsAmount', to: 1})}
                {...product} />)}
            </div>
            
            {products.length ?
                <div>
                    <button onClick={() => {
                        modal.show = true;
                        setModal({...modal});
                    }}>Checkout</button>
                    <i>Subtotal: {getSubtotal()}</i>
                </div>
            : null}
        </Layout>
    );
}