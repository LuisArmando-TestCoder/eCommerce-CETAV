import React from 'react';
import Layout from '../components/layout';

export default props => {
    const { id } = props.match.params;
    return (
        <Layout>
            {id}
        </Layout>
    );
}