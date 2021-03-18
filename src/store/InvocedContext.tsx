import React, { createContext, useState } from 'react';

import { 
    InvocedContextData, 
    ProviderPropsInvoced, 
    InvocedData 
} from '../utils/interfaces';

import Form from '../components/Form'
import ListInput from '../components/ListInput';

export const InvocedContext = createContext({} as InvocedContextData);

export function InvocedProvider ({ children }: ProviderPropsInvoced ) {

    const [clienteData, setClienteData] = useState({} as InvocedData );
    const [formIsOpen, setFormIsOpen] = useState(false);
    const [loopingInput, setLoopingInput] = useState([<ListInput key={'x'} value={'x'} />]);
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [uf, setUf] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [paymentTerms, setPaymentTerm] = useState('');
    const [nameProduct, setNameProduct] = useState('');

    function openForm() {
        setFormIsOpen(true)
    }

    function closeForm() {
        setFormIsOpen(false)
    }
    

    function handleAddress(value: string) {
        setAddress(value)
    }

    function handleCity(value: string) {
        setCity(value)
    }

    function handleZip(value: string) {
        setZip(value)
    }

    function handleUf(value: string) {
        setUf(value)
    }

    function handleName(value: string) {
        setName(value)
    }

    function handleEmail(value: string) {
        setEmail(value)
    }

    function handlePhone(value: string) {
        setPhone(value)
    }
    
    function handleDate(value: string) {
        setDate(value)
    }

    function handlePaymentTerms(value: string) {
        setPaymentTerm(value)
    }

    function handleNameProduct(value: string) {
        setNameProduct(value)
    }


    function loopingCreatInput() {
        for(let i = 0; i < loopingInput.length; i++) {
            setLoopingInput([
                ...loopingInput,
                <ListInput key={i} value={i} />
            ])
        }
    }

    function deleteItem(value: number | string) {
        setLoopingInput(
            loopingInput.filter(item => item.key !== value)
        )
    }

    const store = {
        clienteData,
        openForm,
        closeForm,
        loopingInput,
        loopingCreatInput,
        deleteItem,
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
    }
    return (
        <InvocedContext.Provider value={store}>
            { children }

            { formIsOpen && <Form /> }
        </InvocedContext.Provider>
    )
}