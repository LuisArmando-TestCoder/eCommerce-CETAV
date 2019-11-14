import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

export default props => {
    return (
        <nav className='nav'>
            <ul className='nav__links-list'>
                {props.links.map(({to, title}, i) => {
                    return <li className='links-list__item' key={i}>
                        <NavLink className='item__link' to={to}>{title}</NavLink>
                        {
                            title === props.additional.target ?
                            <sup className='item__additional'>{props.additional.value}</sup>
                            :
                            null
                        }
                    </li>
                })}
            </ul>
        </nav>
    );
}