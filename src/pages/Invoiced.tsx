import React from 'react';
import NavBar from '../components/NavBar';
import { RiArrowDropLeftLine } from "react-icons/ri";
import { BsDot } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function Invoiced(): JSX.Element {
    return (
        <div className="invoiced">
            <NavBar />
            <div className="invoiced__container">
                <div className="invoiced__header">
                    <Link to="/" className="invoiced__header__top">
                        <RiArrowDropLeftLine color="#7C5DF9" fontSize="2rem" />
                        Voltar para Home
                    </Link>
                    <div className="invoiced__header__bottom">
                        <div className="invoiced__header__bottom__status">
                            <p>Status:</p>
                            <div className={`invoiced__header__bottom__status--${'true'}`}>
                                <p>
                                    <BsDot />
                                </p>
                                <p>Pago</p>
                            </div>
                        </div>
                        <div className="invoiced__header__bottom__btn">
                            <button className="invoiced__header__delete">Deletar</button>
                            <button className="invoiced__header__mark">Marca como Pago</button>
                        </div>
                    </div>
                </div>
                <div className="invoiced__body">
                    <div className="invoiced__body__header">
                        <div>
                            <h2>
                                <span>#</span>
                                XMR9
                            </h2>
                            <h3>Pintar o muro</h3>
                        </div>
                        <div>
                            <p>Rua Ernesto Ferreli</p>
                            <p>Mogi das Cruzes</p>
                            <p>São Paulo</p>
                            <p>08793-030</p>
                        </div>
                    </div>
                    <div className="invoiced__body__main">
                        <div className="invoiced__body__main__top">
                            <div>
                                <p>Data da Emissão</p>
                                <h3>21 Agosto 2021</h3>
                            </div>
                            <div>
                                <p>Nome do Cliente</p>
                                <h3>Edgar Silva</h3>
                            </div>
                            <div>
                                <p>Email</p>
                                <h3>esilva644@gmail.com</h3>
                            </div>
                        </div>

                        <div className="invoiced__body__main__bottom">
                            <div>
                                <p>Data do Pagamento</p>
                                <h3>20 Setembro 2021</h3>
                            </div>
                            <div>
                                <p>Telefone do Cliente</p>
                                <h3>(11) 999629197</h3>
                            </div>
                        </div>
                    </div>
                    <div className="invoiced__body__footer">
                        <table>
                            <thead>
                                <tr>
                                    <th className="invoiced__body__footer__name">Nome do Item</th>
                                    <th className="invoiced__body__footer__qtd">Qtd.</th>
                                    <th className="invoiced__body__footer__price">Preço</th>
                                    <th className="invoiced__body__footer__total-price">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="invoiced__body__footer__name">Banner do Site</td>
                                    <td className="invoiced__body__footer__qtd">1</td>
                                    <td className="invoiced__body__footer__price">R$: 156.00</td>
                                    <td className="invoiced__body__footer__total-price">R$: 156.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="invoiced__body__total">
                            <p>Total da Fatura</p>
                            <h2>R$: 156.00</h2>
                        </div>
                </div>
            </div>
        </div>
    )
}
