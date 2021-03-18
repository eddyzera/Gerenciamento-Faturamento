import { ReactNode } from 'react'

export interface InvocedContextData {
    clienteData : InvocedData,
    openForm: () => void,
    closeForm: () => void,
    loopingInput: Array<JSX.Element>,
    loopingCreatInput: () => void,
    deleteItem: (value: number | string) => void,
    address: string,
    city: string,
    zip: string,
    uf: string,
    name: string,
    email: string,
    phone: string,
    date: string,
    paymentTerms: string,
    nameProduct: string,
    handleAddress: (values: string) => void,
    handleCity: (values: string) => void,
    handleZip: (values: string) => void,
    handleUf: (values: string) => void,
    handleName: (values: string) => void,
    handleEmail: (values: string) => void,
    handlePhone: (values: string) => void,
    handleDate: (values: string) => void,
    handlePaymentTerms: (values: string) => void,
    handleNameProduct: (values: string) => void
}

export interface InvocedData {
    id: string
    address: string,
    city: string,
    zip: number,
    uf: string,
    name: string,
    email: string,
    phone: string,
    date: string,
    paymentTerms: string,
    productName: string,
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