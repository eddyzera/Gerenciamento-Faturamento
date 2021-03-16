import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileInvoiceDollar } from "react-icons/fa";

export default function NavBar(): JSX.Element {
    return (
        <div className="nav-bar">
            <Link to="/" className="nav-bar__logo">
                <FaFileInvoiceDollar />
            </Link>
        </div>
    )
}
