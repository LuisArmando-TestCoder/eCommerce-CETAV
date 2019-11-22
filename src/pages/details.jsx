import React, { useState } from 'react';
import Layout from '../components/layout';
import DetailsProduct from '../components/details-product';
import addTo from '../services/addTo';
import getItemsSummation from '../services/getItemsSummation';
import isObject from '../services/isObject';

export default props => {
    const [itemsQuantity, setItemsQuantity] = useState(getItemsSummation(props.cart, 'itemsAmount'));
    const { id } = props.match.params;
    const product = props.products.find(product => product.id === +id);

    return (
        <Layout itemsQuantity={itemsQuantity}>
            {
                product ?
                <DetailsProduct {...product} click={() => {
                    if (isObject(product).in(props.cart)) {
                        // when the the product is already in the cart 
                        // just raise the amount of items in that product
                        const index = isObject(product).where(props.cart);
                        props.cart[index].itemsAmount++;
                    } else addTo({array: props.cart, obj: product, name: 'cart'});
                    setItemsQuantity(getItemsSummation(props.cart, 'itemsAmount'));
                }}/>
                : null
            }
            
        </Layout>
    );
}