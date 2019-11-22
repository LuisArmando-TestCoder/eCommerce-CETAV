import React, { useState } from 'react';
import Layout from '../components/layout';
import SoftProduct from '../components/soft-product';
import Categories from '../components/categories';
import addTo from '../services/addTo';
import getItemsSummation from '../services/getItemsSummation';
import isObject from '../services/isObject';
import './products.css';

export default props => {
    const [products, setProducts] = useState(props.products);
    const [itemsQuantity, setItemsQuantity] = useState(getItemsSummation(props.cart, 'itemsAmount'));
    const [modal, setModal] = useState({
        show: false,
        message: `¿Do you want to add this item to the cart?`,
        buttons: [
            {
                action() {
                    props.cart.pop();
                    setItemsQuantity(getItemsSummation(props.cart, 'itemsAmount'));
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
        ]
    });

    return (
        <Layout isHome={true} modal={modal} itemsQuantity={itemsQuantity}>
            <h2>Store</h2>
            <Categories click={category => {
                setProducts(props.products.filter(product => new RegExp(category, 'gim').test(product.category)));
            }} list={props.products || []}/>
            <div className='products'>
                {products.map((product, i) => <SoftProduct key={i} click={() => {
                    modal.show = true;
                    setModal({...modal});

                    if (isObject(product).in(props.cart)) {
                        // when the the product is already in the cart 
                        // just raise the amount of items in that product
                        const index = isObject(product).where(props.cart);
                        props.cart[index].itemsAmount++;
                    } else addTo({array: props.cart, obj: product, name: 'cart'});

                    setItemsQuantity(getItemsSummation(props.cart, 'itemsAmount'));
                }} {...product}/>)}
            </div>
        </Layout>
    );
}