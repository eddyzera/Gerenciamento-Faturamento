import { ReactNode } from 'react'

export interface InvocedContextData {
    clienteData : InvocedData,
    openForm: () => void;
    formIsOpen: boolean,
}

export interface InvocedData {
    id: string
    street: string,
    city: string,
    post_code: number,
    uf: string,
    name: string,
    email: string,
    cel_phone: string,
    date: string,
    payment_terms: string,
    product_name: string,
    item_list: [
        {
            item_name: string,
            qtd: number,
            total: number
        }
    ]
}

export interface ProviderPropsInvoced {
    children: ReactNode
}