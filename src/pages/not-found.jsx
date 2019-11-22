import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import getItemsSummation from '../services/getItemsSummation';

export default props => {
    const { store } = props;
    const feelings = [':>', ':|', ':<']
    const [feel, setFeel] = useState(0);

    // store.subscribe(() => {
    //     setFeel(store.getState());
    // });

    // useEffect(() => {
    //     setInterval(() => {
    //         store.dispatch({
    //             type: 'NOT_FOUND_FEELING',
    //             feeling: feel + 1
    //         });
    //     }, 1000);
    // }, []);

    return (
        <Layout itemsQuantity={getItemsSummation(props.cart, 'itemsAmount')}>
            <h2>404</h2>
            <p>Hey! It seems like this is not a page in our platform now</p>
            <p>{feelings[feel % feelings.length]}</p>
        </Layout>
    );
}