import React from 'react';
import { NavLink } from 'react-router-dom';

export default props => {
    return (
        <div style={{backgroundImage: `url(${props.imageUrl})`}}>
            <NavLink to={`/product-details/${props.id}`}>
                <h4>{props.name}</h4>
                <b>Category ID: {props.categoryId}</b>
            </NavLink>
            <div>
                <button onClick={e => {
                    props.deleteFrom(e);
                    props.trigger(e);}
                }>delete from cart</button>
                <i>${props.price}</i>
                <div>
                    <button onClick={e => {
                        props.decrease(e);
                        props.trigger(e);}
                    }>-</button>
                    <button onClick={e => {
                        props.increase(e);
                        props.trigger(e);}
                    }>+</button>
                    <i>{props.itemsAmount}</i>
                </div>
            </div>
        </div>
    );
}