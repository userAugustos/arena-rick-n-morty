import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import {Provider} from 'urql';
import {client} from "./utils/client.ts";
import {BrowserRouter} from "react-router-dom";
import {Router} from "./routes.tsx";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider value={client}>
                <Router/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
)
