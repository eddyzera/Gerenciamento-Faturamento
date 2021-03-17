import React, { useContext } from 'react'
import { FaPlus } from "react-icons/fa";
import { InvocedContext } from '../store/InvocedContext';


export default function Header(): JSX.Element {
    
    const { openForm } = useContext(InvocedContext)

    return (
        <header className="header">
            <div className="header__title">
                <h1>Faturas</h1>
                <p>Tem um total de 7 faturas</p>
            </div>
            <button type="button" className="header__new" onClick={openForm}>
                <FaPlus />
                <p>Nova Faturas</p>
            </button>
        </header>
    )
}
