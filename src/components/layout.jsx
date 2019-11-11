import React from 'react';
import Nav from './nav';

export default props => {
    return (
        <div>
            <header>
                <h1>eCommerce CETAV TestCoder</h1>
                <Nav additional={{target: 'cart', value: props.itemsQuantity}} links={[
                    { to: '/', title: 'store' },
                    { to: '/shopping-cart', title: 'cart' }
                ]}/>
            </header>
            {props.children}
        </div>
    );
}