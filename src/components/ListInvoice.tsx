import React from 'react'
import { BsDot } from "react-icons/bs";
import { RiArrowDropRightLine } from "react-icons/ri";
import { Link } from 'react-router-dom'


export default function ListInvoice(): JSX.Element {
    return (
        <div className="list-invoice">
            <div className="list-invoice__item">
                <p className="list-invoice__id">
                    <span>#</span>RT3030
                </p>
                <p className="list-invoice__date">
                    00/00/00
                </p>
                <p className="list-invoice__person">
                    Livia Moreira
                </p>
                <p className="list-invoice__money">
                    R$: 300.00
                </p>
                <div className={`list-invoice__status--${'false'}`}>
                    <p>
                        <BsDot />
                    </p>
                    <p>Pendente</p>
                </div>
                <Link to="/invoiced">
                    <RiArrowDropRightLine fontSize="2rem" color="#7C5DF9" />
                </Link>
            </div>

            <div className="list-invoice__item">
                <p className="list-invoice__id">
                    <span>#</span>RT3030
                </p>
                <p className="list-invoice__date">
                    00/00/00
                </p>
                <p className="list-invoice__person">
                    Livia Moreira
                </p>
                <p className="list-invoice__money">
                    R$: 300.00
                </p>
                <div className={`list-invoice__status--${'true'}`}>
                    <p>
                        <BsDot />
                    </p>
                    <p>Pago</p>
                </div>
                <Link to="/invoiced">
                    <RiArrowDropRightLine fontSize="2rem" color="#7C5DF9" />
                </Link>
            </div>
        </div>
    )
}
