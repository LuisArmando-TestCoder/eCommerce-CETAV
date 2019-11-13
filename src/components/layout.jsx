import React from 'react';
import Nav from './nav';
import Modal from './modal';

export default props => {
    return (
        <div>
            {props.modal && props.modal.show ? <Modal {...props.modal}/> : null}
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