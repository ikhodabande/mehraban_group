import React, {useState} from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Menu from './component/Menu'
import ProductContext from './component/context/product'
import { Routes, Route } from 'react-router-dom'
import Main from './component/Main'
import Prouduct from './component/Prouduct'

const App = () => {
  const [searchBar, setSearchBar] = useState(false)
  return (
    <>
    <ProductContext.Provider value={{searchBar, setSearchBar}}>
    <Navbar/>
    <Menu/>
    <Home/>
    <Main/>
    <Prouduct/>
    </ProductContext.Provider>
    </>
  )
}

export default App