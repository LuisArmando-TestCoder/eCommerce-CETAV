import React from 'react';

export default props => {
    return (
        <React.Fragment>
            <h2>{props.name}</h2>
            <img src={props.imageUrl} alt={props.content}/> 
            <p><b>Price:</b> ${props.price}</p>
            <p>{props.content}</p>
            <button onClick={props.click}>Add to cart</button>
        </React.Fragment>
    );
}
