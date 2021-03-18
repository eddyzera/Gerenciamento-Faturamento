import React, { useContext } from 'react'
import { InvocedContext } from '../store/InvocedContext';
import Trash from '../img/delete.png'

export default function ListInput(props) {

    const {deleteItem} = useContext(InvocedContext)

    return (
        <div className="form__list__item" key={props.value} style={{ display: deleteItem }}>
            <input type="text"/>
            <input type="number" className="form__count" />
            <input type="number" className="form__price" />
            <p className="form__total">1000.00</p>
            <p className="form__trash" value={props.value}>
                <img src={Trash} alt="" value={props.value} onClick={(event)=> deleteItem(event.target.getAttribute('value'))}/>
            </p>
        </div>
    )
}
