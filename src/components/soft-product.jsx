import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
    return (
        <div style={{backgroundImage: `url(${props.imageUrl})`}}>
            <Link to={`/product-details/${props.id}`}>
                    <h4>{props.name}</h4>
                    <p><b>Price:</b> ${props.price}</p>
            </Link>
            <button onClick={props.click}>Add to cart</button>
        </div>
    );
}