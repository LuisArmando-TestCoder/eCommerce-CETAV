import React from 'react';
import { NavLink } from 'react-router-dom';

export default props => {
    return (
        <nav>
            <ul>
                {props.links.map(({to, title}, i) => {
                    return <li key={i}>
                        <NavLink to={to}>{title}</NavLink>
                        {
                            title === props.additional.target ?
                            <i>{props.additional.value}</i>
                            :
                            null
                        }
                    </li>
                })}
            </ul>
        </nav>
    );
}