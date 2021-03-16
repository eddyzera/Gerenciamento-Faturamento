import React from 'react'
import Header from '../components/Header'
import ListInvoice from '../components/ListInvoice'
import NavBar from '../components/NavBar'

export default function Home():JSX.Element {
    return (
        <div className="home">
            <NavBar />
            <div className="home__container">
                <Header />
                <ListInvoice />
            </div>
        </div>
    )
}
