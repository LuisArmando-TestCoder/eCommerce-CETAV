import React, { useState } from 'react';
import Layout from '../components/layout';
import getItemsSummation from '../services/getItemsSummation';
import './not-found.css';

export default props => {
    const { store } = props;
    const feelings = ['😆', '😀', '😊', '😏', '😒', '😔', '😖', '😔', '😒', '😏', '😊', '😀']
    const [feel, setFeel] = useState(0);

    store.subscribe(() => {
        setFeel(store.getState());
    });

    setTimeout(() => {
        store.dispatch({
            type: 'NOT_FOUND_FEELING',
            feeling: feel + 1
        });
    }, 200);

    return (
        <Layout itemsQuantity={getItemsSummation(props.cart, 'itemsAmount')}>
            <h2 className='not-found--big-font'>404 {feelings[feel % feelings.length]}</h2>
            <p>Hey! It seems like this is not a page in our platform now</p>
        </Layout>
    );
}