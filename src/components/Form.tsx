import React, { useContext } from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { InvocedContext } from '../store/InvocedContext';


export default function Form() {

    const { closeForm } = useContext(InvocedContext)

    return (
        <div className="form">
            <div className="form__box">
                <form action="">
                    <div className="form__address">
                        <h3>Informações do Endereço</h3>
                        <label>Endereço</label>
                        <input type="text"/>
                        <div className="form__address__container">
                            <div>
                                <label>Cidade</label>
                                <input type="text"/>
                            </div>
                            <div>
                                <label>CEP</label>
                                <input type="text"/>
                            </div>
                            <div>
                                <label>Estado</label>
                                <input type="text"/>
                            </div>
                        </div>
                    </div>

                    <div className="form__person">
                        <h3>Informações do Cliente</h3>
                        <label>Nome do Cliente</label>
                        <input type="text"/>
                        <label>Email do Cliente</label>
                        <input type="text"/>
                        <label>Telefone do Cliente</label>
                        <input type="text"/>
                        <div className="form__person__payment">
                            <div>
                                <label >Emissão da fatura</label>
                                <input type="date"/>
                            </div>
                            <div>
                                <label >Termos de Pagamento</label>
                                <select>
                                    <option value="30">30 dias</option>
                                    <option value="60">60 dias</option>
                                    <option value="90">90 dias</option>
                                </select>
                            </div>
                        </div>

                        <div className="form__product">
                            <h3>Descrições do Produto</h3>
                            <label>Nome do Produto</label>
                            <input type="text"/>
                        </div>
                        <div className="form__list">
                            <h3>Itens da Lista</h3>
                            <div className="form__list__description">
                                <div>
                                    <p>Nome do item</p>
                                    <p>Qtd</p>
                                    <p>Preço</p>
                                    <p>Total</p>
                                </div>
                                <div className="form__list__item">
                                    <input type="text"/>
                                    <input type="number" className="form__count" />
                                    <input type="number" className="form__price" />
                                    <p className="form__total">1000.00</p>
                                    <p className="form__trash">
                                        <FaTrashAlt color="#787EA7" />
                                    </p>
                                </div>
                            </div>
                            <button className="form__list__create">+ Criar novo item</button>
                        </div>
                    </div>
                    <div className="form__btn">
                        <button className="form__btn__cancel" onClick={closeForm} >Cancelar</button>
                        <button className="form__btn__create">Criar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
