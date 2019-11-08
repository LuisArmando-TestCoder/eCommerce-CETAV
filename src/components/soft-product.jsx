import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
    return (
        <Link to={`/product-details/${props.id}`}>
            <div style={{backgroundImage: `url(${props.imageUrl})`}}>
                <strong>{props.name}</strong>
                <p><b>Price:</b> ${props.price}</p>
                <button onClick={props.click}>Add to cart</button>
            </div>
        </Link>
    );
}