import React from 'react';

export default props => {
    return (
        <div>
            <p>{props.message}</p>
            <div>
                {
                    props.buttons.map(btn => 
                    <button {...btn.additional} onClick={btn.action}>
                        {btn.content}
                    </button>)
                }
            </div>
        </div>
    );
}