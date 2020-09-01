import * as React from 'react';
import './Panel.scss'
import Card from "../Card/Card";
import AddForm from "../AddForm/AddForm";
import classNames from 'classnames'
import removeSvg from '../../assets/remove.svg'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


const Panel = ({cards,title,addPanel,addCard,panelIndex,deletePanel}) => {

    const onDeletePanel = () => {
        if(window.confirm('Вы действительно хотите удалить панель?')) {
            deletePanel(panelIndex)
        }
    };

    return (
        <div className={classNames('panel',{
            'panel--empty': !cards
        })}>
            {cards &&
            <div className='panel__remove'>
                <img onClick={onDeletePanel} src={removeSvg} alt="remove svg"/>
            </div> }
            {title
            && <div className="panel__title">
                <b>{title}</b>
            </div>
            }
            {cards && (
                <div className='panel__items'>
                {cards && cards.map((card, index) => <Card key={index}>{card}</Card>)}
            </div>)}
            <AddForm isEmptyPanel={cards} panelIndex={panelIndex} onAddPanel={addPanel} onAddCard={addCard}/>
        </div>
    );
};

export default Panel