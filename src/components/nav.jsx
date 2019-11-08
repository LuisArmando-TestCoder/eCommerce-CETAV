import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
    return (
        <nav>
            <ul>
                {props.links.map(({to, title}, i) => <li key={i}><Link to={to}>{title}</Link></li>)}
            </ul>
        </nav>
    );
}