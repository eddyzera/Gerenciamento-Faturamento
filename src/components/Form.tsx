import React from 'react'

export default function Form() {
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
                        <label>Nome do Cliente</label>
                        <input type="text"/>
                        <label>Email do Cliente</label>
                        <input type="text"/>
                        <label>Telefone do Cliente</label>
                        <input type="text"/>
                        <div className="form__payment__date">
                            <div>
                                <label >Data da Fatura</label>
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

                        <div className="form__produtct">
                            <h3>Descrição Produto</h3>
                            <input type="text"/>
                            <div className="form__list">
                                <h3>Itens da Lista</h3>
                                <label>Nome do Item</label>
                                <label>Qtd.</label>
                                <label>Preço</label>
                                <label>Total</label>
                                <div className="form__list__item">
                                    <input type="text"/>
                                    <input type="number"/>
                                    <input type="number"/>
                                </div>
                                <button className="form__list__create">+ Criar novo item</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
