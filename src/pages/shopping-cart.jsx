import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import Layout from '../components/layout';
import CartProduct from '../components/cart-product';
import movePropValue from '../services/movePropValue';
import saveLocal from '../services/saveLocal';
import getItemsSummation from '../services/getItemsSummation';
import checkout from '../services/checkout';
import './checkout.css';

const GoBackInStatus = (props) => {
    const states = {
        success: <React.Fragment>
            <p>The 😏 checkout 😊 was successful!😀</p>
            <NavLink to='/'>Let's buy even MORE!</NavLink>
        </React.Fragment>,
        error: <React.Fragment>
            <p>It seems that the operation failed</p>
            <NavLink to='/'>Try again</NavLink>
        </React.Fragment>,
        wait: <p>Loading</p>
    };
    return (
        <div>
            <h2>{props.status}</h2>
            {states[props.status]}
        </div>
    )
}

export default props => {
    const [products, setProducts] = useState(props.cart);
    const [checkoutProduct, setCheckoutProduct] = useState({
        name: 'Ecommerce products',
        price: getSubtotal(),
        description: 'ecommerce clothes'
    });
    const [displayStatus, setDisplayStatus] = useState();

    function getSubtotal() {
        return products.length ? products.map(a => a.itemsAmount * a.price).reduce((a, b) => a + b) : 0;
    }

    function saveChanges() {
        setProducts([...props.cart]);
        saveLocal(products).in('cart');
        checkoutProduct.price = getSubtotal();
        setCheckoutProduct({...checkoutProduct});
    }

    return (
        <Layout itemsQuantity={getItemsSummation(props.cart, 'itemsAmount')}>
            {products.length ?
                <div className='checkout--sticky'>
                    <div className='checkout--sticky__wrapper'>
                        <i className='wrapper__info'>Subtotal: {' '}
                            <b className='info__value'>${getSubtotal()}</b>
                        </i>
                        <StripeCheckout stripeKey='pk_test_rqlF5WYlPXEKcONrl1MqUFte00ZZB9qxgQ'
                                    token={(token, addresses) => {
                                        setDisplayStatus(<GoBackInStatus status={'wait'}/>);
                                        checkout(token, addresses, checkoutProduct).then(r => setDisplayStatus(<GoBackInStatus {...r}/>));
                                        props.cart.splice(0, Infinity);
                                        setProducts([...props.cart]);
                                    }}
                                    amount={checkoutProduct.price * 100}
                                    name='Ecommerce products'
                                    billingAddress
                                    shippingAddress
                        />
                    </div>
                </div>
            : null}

            <h2>{displayStatus || 'Cart'}</h2>
            <div className='products'>
                {products.map((product, i) => <CartProduct key={i}
                    trigger={saveChanges}
                    deleteFrom={() => {
                        props.cart[i].itemsAmount = 1;
                        props.cart.splice(i, 1);
                    }}
                    itemsAmount={products[i].itemsAmount}
                    decrease={() => movePropValue({obj: product, name: 'itemsAmount', to: -1})}
                    increase={() => movePropValue({obj: product, name: 'itemsAmount', to: 1})}
                {...product} />)}
            </div>
        </Layout>
    );
}