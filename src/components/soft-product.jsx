import React from 'react';
import { NavLink } from 'react-router-dom';
import './soft-product.css';

export default props => {
    return (
        <div className='soft-product' style={{backgroundImage: `url(${props.imageUrl})`, '--img': `url(${props.imageUrl})`}}>
            <NavLink activeClassName='product-link' to={`/product-details/${props.id}`}>
                    <h4 className='product-link__title'>{props.name}</h4>
                    <p><b>Price:</b> ${props.price}</p>
            </NavLink>
            <button className='product-btn' onClick={props.click}>Add to cart</button>
        </div>
    );
}