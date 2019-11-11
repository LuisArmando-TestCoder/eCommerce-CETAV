import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
    return (
        <nav>
            <ul>
                {props.links.map(({to, title}, i) => {
                    return <li key={i}>
                        <Link to={to}>{title}</Link>
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