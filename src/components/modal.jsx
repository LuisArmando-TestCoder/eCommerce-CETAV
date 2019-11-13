import React from 'react';

export default props => {
    return (
        <div {...props.additional}>
            <p>{props.message}</p>
            <div>
                {
                    props.buttons.map((btn, i) => 
                        <button key={i} onClick={btn.action}>{btn.content}</button>
                    )
                }
            </div>
        </div>
    );
}