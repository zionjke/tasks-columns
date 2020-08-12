import * as React from 'react';
import './Panel.scss'
import Card from "../Card/Card";
import AddForm from "../AddForm/AddForm";



const Panel = ({items}) => {
    return (
        <div className='panel'>
            <div className='panel__items'>
                {items && items.map((item, index) => <Card>{item.text}</Card>)}
            </div>
            <AddForm/>
        </div>
    );
};

export default Panel