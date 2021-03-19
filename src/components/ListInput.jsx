import React, { useContext } from 'react'
import { InvocedContext } from '../store/InvocedContext';
import Trash from '../img/delete.png'

export default function ListInput(props) {

    const {
        deleteItem,
        itemName,
        itemQtd,
        itemPrice,
        itemTotal,
        handleItemName,
        handleItemQtd,
        handleItemPrice,
    } = useContext(InvocedContext)

    return (
        <div className="form__list__item" key={props.value} style={{ display: deleteItem }}>
            <input 
                type="text"
                className="form__name"
                value={itemName}
                onChange={(event) => handleItemName(event.target.value)}
            />
            <input 
                type="number"
                className="form__count"
                value={itemQtd}
                onChange={(event) => handleItemQtd(parseInt(event.target.value))}
            />
            <input 
                type="number" 
                className="form__price"
                value={itemPrice}
                onChange={(event) => handleItemPrice(parseFloat(event.target.value))}
            />
            <p className="form__total">{itemTotal.toFixed(2)}</p>
            <p className="form__trash" value={props.value}>
                <img src={Trash} alt="" value={props.value} onClick={(event)=> deleteItem(event.target.getAttribute('value'))}/>
            </p>
        </div>
    )
}
