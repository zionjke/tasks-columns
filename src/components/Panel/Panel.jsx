import * as React from 'react';
import './Panel.scss'
import Card from "../Card/Card";
import AddForm from "../AddForm/AddForm";
import classNames from 'classnames'


const Panel = ({cards,title}) => {
    return (
        <div className={classNames('panel',{
            'panel--empty': !cards
        })}>
            {title
            && <div className="panel__title">
                <b>{title}</b>
            </div>
            }
            {cards && (
                <div className='panel__items'>
                {cards.map((card, index) => <Card key={index}>{card}</Card>)}
            </div>)}
            <AddForm isEmptyPanel={cards}/>
        </div>
    );
};

export default Panel