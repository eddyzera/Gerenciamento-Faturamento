import React, { createContext, useState } from 'react';

import { 
    InvocedContextData, 
    ProviderPropsInvoced, 
    InvocedData 
} from '../utils/interfaces';

import Form from '../components/Form'

export const InvocedContext = createContext({} as InvocedContextData);

export function InvocedProvider ({ children }: ProviderPropsInvoced ) {

    const [clienteData, setClienteData] = useState({} as InvocedData );
    const [formIsOpen, setFormIsOpen] = useState(false);

    function openForm() {
        setFormIsOpen(true)
    }

    function closeForm() {
        setFormIsOpen(false)
    }

    const store = {
        clienteData,
        openForm,
        closeForm
    }
    return (
        <InvocedContext.Provider value={store}>
            { children }

            { formIsOpen && <Form /> }
        </InvocedContext.Provider>
    )
}