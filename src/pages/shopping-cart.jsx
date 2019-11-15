import React, { useState } from 'react';
import Layout from '../components/layout';
import CartProduct from '../components/cart-product';
import movePropValue from '../services/movePropValue';
import saveLocal from '../services/saveLocal';
import getItemsSummation from '../services/getItemsSummation';
import './checkout.css';

export default props => {
    const [products, setProducts] = useState(props.cart);
    const [modal, setModal] = useState({
        show: false,
        message: 'Buying',
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

    function getSubtotal() {
        return products.length ? products.map(a => a.itemsAmount * a.price).reduce((a, b) => a + b) : 0;
    }

    function saveChanges() {
        setProducts([...props.cart]);
        saveLocal(products).in('cart');
    }

    return (
        <Layout modal={modal} itemsQuantity={getItemsSummation(props.cart, 'itemsAmount')}>
            {products.length ?
                <div className='checkout--sticky'>
                    <div className='checkout--sticky__wrapper'>
                        <i className='wrapper__info'>Subtotal: {' '}
                            <b className='info__value'>{getSubtotal()}</b>
                        </i>
                        <button className='wrapper__btn' onClick={() => {
                            modal.show = true;
                            setModal({...modal});
                        }}>Checkout</button>
                    </div>
                </div>
            : null}

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
        </Layout>
    );
}