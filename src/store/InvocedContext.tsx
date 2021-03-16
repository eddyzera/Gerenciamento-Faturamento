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
    const [formIsOpen, setFormIsOpen] = useState(true);

    function openForm() {
        setFormIsOpen(true)
    }

    const store = {
        clienteData,
        formIsOpen,
        openForm
    }
    return (
        <InvocedContext.Provider value={store}>
            { children }

            { formIsOpen && <Form /> }
        </InvocedContext.Provider>
    )
}