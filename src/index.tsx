import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/css/style.css';
import { InvocedProvider } from './store/InvocedContext'

ReactDOM.render( 
    <InvocedProvider>
        <App /> 
    </InvocedProvider>,
    document.getElementById('root'));

