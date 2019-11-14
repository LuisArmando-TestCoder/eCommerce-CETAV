import React from 'react';
import Nav from './nav';
import Modal from './modal';
import './layout.css';

export default props => {
    const title =  props.title || 'eCommerce CETAV';
    const titleTag = document.querySelector('title');

    titleTag.innerText = title;

    return (
        <div className='layout'>
            {props.modal && props.modal.show ? <Modal {...props.modal}/> : null}
            <header>
                <h1>{title}</h1>
                <Nav additional={{target: 'cart', value: props.itemsQuantity}} links={[
                    { to: '/', title: 'store' },
                    { to: '/shopping-cart', title: 'cart' }
                ]}/>
            </header>
            {props.children}
        </div>
    );
}