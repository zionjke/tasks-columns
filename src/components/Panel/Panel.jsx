import * as React from 'react';
import './Panel.scss'
import Card from "../Card/Card";
import addSvg from '../../assets/add.svg'


const Panel = ({items}) => {
    return (
        <div className='panel'>
            <div className='panel__items'>
                {items.map((item,index) => <Card key={index} {...item}/>)}
            </div>
            <div className='panel__bottom'>
                <div className='panel__bottom-add-btn'>
                    <img src={addSvg} alt="Add svg icon"/>
                    <span>Добавить еще одну карточку</span>
                </div>
            </div>
        </div>

    );
};

export default Panel