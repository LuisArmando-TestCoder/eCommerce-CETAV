import React, { useState } from 'react';
import Layout from '../components/layout';
import SoftProduct from '../components/soft-product';
import addToCart from '../services/addToCart';

export default props => {
    const [products, setProducts] = useState([]);
    fetch('./products.json').then(r => r.json()).then(setProducts);
    return (
        <Layout>
            <h2>Store</h2>
            {products.map((product, i) => <SoftProduct key={i} click={addToCart} {...product}/>)}
        </Layout>
    );
}