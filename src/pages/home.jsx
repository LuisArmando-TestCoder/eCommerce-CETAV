import React, { useState } from 'react';
import Layout from '../components/layout';
import SoftProduct from '../components/soft-product';
import addTo from '../services/addTo';
import './products.css';

export default props => {
    const [itemsQuantity, setItemsQuantity] = useState(props.cart.length);
    const [modal, setModal] = useState({
        show: false,
        message: `¿Do you want to add this item to the cart?`,
        buttons: [
            {
                action() {
                    props.cart.pop();
                    setItemsQuantity(props.cart.length);
                    modal.show = false;
                    setModal({...modal});
                },
                content: 'Cancel',
            },
            {
                action() {
                    modal.show = false;
                    setModal({...modal});
                },
                content: 'Add to cart',
            }
        ],
    });

    return (
        <Layout modal={modal} itemsQuantity={itemsQuantity}>
            <h2>Store</h2>
            <div className='products'>
                {props.products.map((product, i) => <SoftProduct key={i} click={() => {
                    modal.show = true;
                    setModal({...modal});
                    if(!props.cart.find(p => p.id === product.id)) {
                        addTo({array: props.cart, obj: product, name: 'cart'});
                        setItemsQuantity(props.cart.length);
                    }
                }} {...product}/>)}
            </div>
        </Layout>
    );
}