import React, { useContext } from 'react'
import { InvocedContext } from '../store/InvocedContext';

export default function Form() {

    const { 
        closeForm, 
        loopingCreatInput,
        loopingInput,
        address,
        city,
        zip,
        uf,
        name,
        email,
        phone,
        date,
        paymentTerms,
        nameProduct,
        handleAddress,
        handleCity,
        handleZip,
        handleUf,
        handleName,
        handleEmail,
        handlePhone,
        handleDate,
        handlePaymentTerms,
        handleNameProduct

    } = useContext(InvocedContext)

    return (
        <div className="form">
            <div className="form__box">
                <form action="">
                    <div className="form__address">
                        <h3>Informações do Endereço</h3>
                        <label>Endereço</label>
                        <input 
                            type="text" 
                            value={address} 
                            onChange={(event) => handleAddress(event.target.value)}
                        />
                        <div className="form__address__container">
                            <div>
                                <label>Cidade</label>
                                <input 
                                    type="text" 
                                    value={city} 
                                    onChange={(event) => handleCity(event.target.value)}
                                    />
                            </div>
                            <div>
                                <label>CEP</label>
                                <input 
                                    type="text"
                                    value={zip}
                                    onChange={(event) => handleZip(event.target.value) }
                                />
                            </div>
                            <div>
                                <label>Estado</label>
                                <input 
                                    type="text"
                                    value={uf}
                                    onChange={(event) => handleUf(event.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form__person">
                        <h3>Informações do Cliente</h3>
                        <label>Nome do Cliente</label>
                        <input 
                            type="text"
                            value={name}
                            onChange={(event) => handleName(event.target.value)}
                        />
                        <label>Email do Cliente</label>
                        <input 
                            type="text"
                            value={email}
                            onChange={(event) => handleEmail(event.target.value)}
                        />
                        <label>Telefone do Cliente</label>
                        <input 
                            type="text"
                            value={phone}
                            onChange={(event) => handlePhone(event.target.value)}
                        />
                        <div className="form__person__payment">
                            <div>
                                <label >Emissão da fatura</label>
                                <input 
                                    type="date"
                                    value={date}
                                    onChange={(event) => handleDate(event.target.value)}
                                />
                            </div>
                            <div>
                                <label >Termos de Pagamento</label>
                                <select 
                                    value={paymentTerms} 
                                    onChange={(event) => handlePaymentTerms(event.target.value)}
                                >
                                    <option value="30">30 dias</option>
                                    <option value="60">60 dias</option>
                                    <option value="90">90 dias</option>
                                </select>
                            </div>
                        </div>

                        <div className="form__product">
                            <h3>Descrições do Produto</h3>
                            <label>Nome do Produto</label>
                            <input 
                                type="text"
                                value={nameProduct}
                                onChange={(event) => handleNameProduct(event.target.value)}
                            />
                        </div>
                        <div className="form__list">
                            <h3>Itens da Lista</h3>
                            { loopingInput.length !== 0 && (
                                <div className="form__list__description">
                                    <div>
                                        <p>Nome do item</p>
                                        <p>Qtd</p>
                                        <p>Preço</p>
                                        <p>Total</p>
                                    </div>
                                    {loopingInput}
                                </div>
                            )}
                            <button 
                                className="form__list__create" onClick={loopingCreatInput}
                                type="button"
                            >
                                    + Criar novo item
                            </button>
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
