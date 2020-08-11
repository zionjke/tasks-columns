import * as React from 'react';
import './Card.scss'


const Card = ({text}) => {
    return (
        <div className='card'>
            {text}
        </div>
    );
};

export default Card