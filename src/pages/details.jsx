import React, { useState } from 'react';
import Layout from '../components/layout';
import DetailsProduct from '../components/details-product';
import addTo from '../services/addTo';

export default props => {
    const [itemsQuantity, setItemsQuantity] = useState(props.cart.length);
    const { id } = props.match.params;
    const product = props.products.find(product => product.id === +id);

    return (
        <Layout itemsQuantity={itemsQuantity}>
            {
                product ?
                <DetailsProduct {...product} click={() => {
                    if (!props.cart.find(p => p.id === product.id)) {
                        addTo({array: props.cart, obj: product, name: 'cart'});
                        setItemsQuantity(props.cart.length);
                    }
                }}/>
                : null
            }
            
        </Layout>
    );
}