import React from 'react';
import './details-product.css';

export default props => {
    return (
        <div className='details-product'>
            <img className='details-product__img' src={props.imageUrl} alt={props.content}/>
            <div className='details-product__wrapper'>
                <h2 className='details-product__title'>{props.name}</h2>
                <p className='wrapper__paragraph wrapper__paragraph--left'><b>Price:</b> ${props.price}</p>
                <p className='wrapper__paragraph'>{props.content}</p>
                <button className='product-btn' onClick={props.click}>Add to cart</button>
            </div>
        </div>
    );
}
