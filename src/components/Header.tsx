import React from 'react'
import { FaPlus } from "react-icons/fa";


export default function Header(): JSX.Element {
    return (
        <header className="header">
            <div className="header__title">
                <h1>Faturas</h1>
                <p>Tem um total de 7 faturas</p>
            </div>
            <button className="header__new">
                <FaPlus />
                <p>Nova Faturas</p>
            </button>
        </header>
    )
}
