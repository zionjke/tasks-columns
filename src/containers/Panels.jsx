import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Panel from "../components/Panel/Panel";
import {Fragment} from "react";
import {panelActions} from "../actions/panels";
import {cardsActions} from "../actions/cards";


const Panels = () => {
    const dispatch = useDispatch();
    const {items} = useSelector(({panels}) => panels);

    const addPanel = (name) => {
        debugger
        dispatch(panelActions.addPanel(name))
    };

    const addCard = (index,text) => {
        dispatch(cardsActions.addCard(index,text))
    };

    const deletePanel = (index) => {
        dispatch(panelActions.deletePanel(index))
    };

    return (
        <Fragment>
            {items && items.map((item,index) => <Panel panelIndex={index} deletePanel={deletePanel}  addPanel={addPanel} addCard={addCard} {...item} key={index}/>)}
            <Panel addPanel={addPanel} addCard={addCard}/>
        </Fragment>
    );
};

export default Panels