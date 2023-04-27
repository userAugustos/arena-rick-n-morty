import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import { Provider } from 'urql';
import { client } from "./client.ts";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Provider value={client}>
        <App />
      </Provider>
  </React.StrictMode>,
)
