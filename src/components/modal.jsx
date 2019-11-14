import React from 'react';
import './modal.css';

export default props => {
    return (
        <div className='modal'>
            <p className='modal__message'>{props.message}</p>
            <div className='modal__buttons-wrapper'>
                {
                    props.buttons.map((btn, i) => 
                        <button className='buttons-wrapper__btn'
                            key={i} onClick={btn.action}>
                                {btn.content}
                            </button>
                    )
                }
            </div>
        </div>
    );
}