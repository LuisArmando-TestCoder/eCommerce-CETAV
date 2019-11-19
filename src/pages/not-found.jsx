import React from 'react';
import Layout from '../components/layout';
import getItemsSummation from '../services/getItemsSummation';

export default props => {
    return (
        <Layout itemsQuantity={getItemsSummation(props.cart, 'itemsAmount')}>
            <h2>404</h2>
            <p>Hey! It seems like this is not a page in our platform now</p>
            <p>{':<'}</p>
        </Layout>
    );
}