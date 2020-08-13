import * as React from 'react';
import {useSelector} from "react-redux";
import Panel from "../components/Panel/Panel";
import {Fragment} from "react";


const Panels = () => {
    const {items} = useSelector(({panels}) => panels);
    return (
        <Fragment>
            {items && items.map((item,index) => <Panel {...item} key={index}/>)}
            <Panel/>
        </Fragment>
    );
};

export default Panels