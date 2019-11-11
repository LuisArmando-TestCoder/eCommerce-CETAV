import React, { useState } from 'react';
import Layout from '../components/layout';
import SoftProduct from '../components/soft-product';
import addTo from '../services/addTo';

export default props => {
    const [itemsQuantity, setItemsQuantity] = useState(props.cart.length);

    return (
        <Layout itemsQuantity={itemsQuantity}>
            <h2>Store</h2>
            {props.products.map((product, i) => <SoftProduct key={i} click={() => {
                if(!props.cart.find(p => p.id === product.id)) {
                    addTo({array: props.cart, obj: product, name: 'cart'});
                    setItemsQuantity(props.cart.length);
                }
            }} {...product}/>)}
        </Layout>
    );
}