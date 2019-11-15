import React from 'react';
import { NavLink } from 'react-router-dom';
import './cart-product.css';

export default props => {
    return (
        <div className='cart-product' style={{backgroundImage: `url(${props.imageUrl})`}}>
            <NavLink to={`/product-details/${props.id}`}>
                <h4>{props.name}</h4>
                <b>Category: {props.category}</b>
            </NavLink>
            <div className='cart-product__buttons-wrapper'>
                <div className='buttons-wrapper__wrap-item'>
                    <i><b>Amount:</b> {props.itemsAmount}</i>
                    <button className='wrap-item__btn wrap-item__btn--left' onClick={e => {
                        props.decrease(e);
                        props.trigger(e);}
                    }>-</button>
                    <button className='wrap-item__btn wrap-item__btn--right' onClick={e => {
                        props.increase(e);
                        props.trigger(e);}
                    }>+</button>
                    <i className='wrap-item__info'><b>Price e/u:</b> ${props.price}</i>
                </div>
                <button className='buttons-wrapper__delete' onClick={e => {
                    props.deleteFrom(e);
                    props.trigger(e);}
                }>delete from cart</button>
            </div>
        </div>
    );
}