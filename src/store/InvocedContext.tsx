import React, { createContext, useState, useEffect } from 'react';

import { 
    InvocedContextData, 
    ProviderPropsInvoced, 
    InvocedData, 
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
    const [paymentTerms, setPaymentTerm] = useState('30');
    const [nameProduct, setNameProduct] = useState('');
    const [itemList, setItemList] = useState([{ name: '', qtd: 0, price: 0}]);
    const [itemName, setItemName] = useState('');
    const [itemQtd, setItemQtd] = useState(0);
    const [itemPrice, setItemPrice] = useState(0);
    const [itemTotal, setItemTotal] = useState(0);

    function openForm() {
        setFormIsOpen(true)
    }

    function closeForm() {
        setFormIsOpen(false)
        setAddress('')
        setCity('')
        setZip('')
        setUf('')
        setName('')
        setEmail('')
        setPhone('')
        setDate('')
        setPaymentTerm('')
        setNameProduct('')
        setItemName('')
        setItemQtd(0)
        setItemPrice(0)
        setItemTotal(0)
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

    function handleItemName (value: string) {
        setItemName(value)
    }

    function handleItemQtd (value: number) {
        setItemQtd(value)
    }

    function handleItemPrice (value: number) {
        setItemPrice(value)
    }

    useEffect(() => {
        let initialValue = itemQtd

        if (initialValue >= itemQtd) {
            setItemTotal(itemQtd * itemPrice)
        } else if (initialValue <= itemQtd) {
            setItemTotal(itemQtd / itemPrice)
        }
        
        if(!itemPrice) {
            setItemTotal(0)
            setItemPrice(0)
        }

    }, [itemQtd, itemPrice])

    function loopingCreatInput() {
        for(let i = 0; i <= loopingInput.length; i++) {
            setLoopingInput([
                ...loopingInput,
                <ListInput key={i} value={i} />
            ])
            pushArrayItemList()
        }
    }

    function pushArrayItemList() {
        setItemList([
            ...itemList,
            {
                name: itemName,
                qtd: itemQtd,
                price: itemPrice
            }
        ])
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
        handleNameProduct,
        itemName,
        itemQtd,
        itemPrice,
        itemTotal,
        handleItemName,
        handleItemQtd,
        handleItemPrice,
    }

    return (
        <InvocedContext.Provider value={store}>
            { children }

            { formIsOpen && <Form /> }
        </InvocedContext.Provider>
    )
}