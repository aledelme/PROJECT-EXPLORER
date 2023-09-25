import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './components/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import { Balance } from './components/Balance'
import { Tx } from './components/Tx'
import { Bloque } from './components/Bloque'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route path="balance/:balance" element={<Balance></Balance>}></Route>
          <Route path="tx/:tx" element={<Tx></Tx>}></Route>
          <Route path="bloque/:bloque" element={<Bloque></Bloque>}></Route>
          <Route path="404" element={<h2>Valor no encontrado</h2>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
)
