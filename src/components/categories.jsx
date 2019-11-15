import React from 'react';
import './categories.css';

export default props => {
    const categories = [...new Set(props.list.map(object => object.category)), ''];
    return (
        <ul className='categories'>
            {
                categories.map((category, i) => 
                    <li className='categories__item'>
                        <button className='item__btn' key={i} onClick={e => props.click(category, e)}>{category || 'any'}</button>
                    </li>
                )
            }
        </ul>
    );
}