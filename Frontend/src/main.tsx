import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route element={<App/>} path="/">          
        </Route>
      </Routes>      
    </Provider>
  </BrowserRouter>
)
