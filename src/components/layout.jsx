import React from 'react';
import Nav from './nav';
import Modal from './modal';

export default props => {
    return (
        <div>
            {props.modal ? <Modal 
                buttons={props.modal.buttons}
                message={props.modal.message}/> : null}
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