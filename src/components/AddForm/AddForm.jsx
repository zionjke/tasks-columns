import {Fragment, useCallback, useEffect, useRef, useState} from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import clearSvg from "../../assets/remove.svg";
import addSvg from "../../assets/add.svg";
import * as React from "react";
import './AddForm.scss'

const AddForm = ({isEmptyPanel,onAddPanel,onAddCard,panelIndex}) => {
    const [showForm, setShowForm] = useState(false);
    const [value,setValue] = useState('');
    const textareaRef = useRef(null);

    const openForm = useCallback(() => {
        setShowForm(true)
    },[]);

    const closeForm = useCallback(()=> {
        setShowForm(false)
    },[]);

    const onAdd = (index,value) => {
        if(!isEmptyPanel) {
            onAddPanel(value)
        } else {
            onAddCard(index,value)
        }
        setValue('');
        setShowForm(false)
    };

    useEffect(() => {
        if(textareaRef.current) {
            textareaRef.current.focus()
        }
    },[showForm]);

    return (
        <Fragment>
            {showForm
                ? <div className='add-form'>
                    <div className="add-form__input">
                        <Card>
                            <textarea placeholder={!isEmptyPanel ? 'Введите название колонки' : 'Введите название карточки'}
                                      onChange={e => setValue(e.target.value)}
                                      value={value}
                                      ref={textareaRef}
                                      rows="3"/>
                        </Card>
                        <div className="add-form__bottom">
                            <Button onClick={() => onAdd(panelIndex,value)}>
                                {!isEmptyPanel ? 'Добавить колонку' : 'Добавить карточку'}
                            </Button>
                            <img onClick={closeForm} className='add-form__bottom-clear' src={clearSvg} alt="Clear svg icon"/>
                        </div>
                    </div>
                </div>
                : <div className='panel__bottom'>
                    <div className='panel__bottom-add-btn'>
                        <img onClick={openForm} src={addSvg} alt="Add svg icon"/>
                        <span>{!isEmptyPanel ? 'Добавить еще одну колонку' : 'Добавить еще одну карточку'}</span>
                    </div>
                </div>}
        </Fragment>
    )
};

export default AddForm