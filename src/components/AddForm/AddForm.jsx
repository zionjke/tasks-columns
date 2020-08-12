import {Fragment, useCallback, useEffect, useRef, useState} from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import clearSvg from "../../assets/remove.svg";
import addSvg from "../../assets/add.svg";
import * as React from "react";
import './AddForm.scss'

const AddForm = () => {
    const [showForm, setShowForm] = useState(false);
    const textareaRef = useRef(null)

    const openForm = useCallback(() => {
        setShowForm(true)
    },[])

    const closeForm = useCallback(()=> {
        setShowForm(false)
    },[])

    useEffect(() => {
        if(textareaRef.current) {
            textareaRef.current.focus()
        }
    },[showForm])

    return (
        <Fragment>
            {showForm
                ? <div className='add-form'>
                    <div className="add-form__input">
                        <Card>
                            <textarea placeholder='Введите значение карточки' ref={textareaRef} rows="3"></textarea>
                        </Card>
                        <div className="add-form__bottom">
                            <Button>
                                Добавить карточку
                            </Button>
                            <img onClick={closeForm} className='add-form__bottom-clear' src={clearSvg} alt="Clear svg icon"/>
                        </div>
                    </div>
                </div>
                : <div className='panel__bottom'>
                    <div className='panel__bottom-add-btn'>
                        <img onClick={openForm} src={addSvg} alt="Add svg icon"/>
                        <span>Добавить еще одну карточку</span>
                    </div>
                </div>}
        </Fragment>
    )
}

export default AddForm