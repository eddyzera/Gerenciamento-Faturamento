import React from 'react'
import { 
    BrowserRouter, 
    Route, 
    Switch 
} from 'react-router-dom'


import Home from './pages/Home'
import invoiced from './pages/Invoiced'

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/invoiced" component={invoiced} />
            </Switch>
        </BrowserRouter>
    )
}
