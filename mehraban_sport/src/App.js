import React, {useState} from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Menu from './component/Menu'
import ProductContext from './component/context/product'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  const [serachBar, setSearchBar] = useState(false)
  return (
    <>
    <ProductContext.Provider value={{serachBar, setSearchBar}}>
    <Navbar/>
    <Home/>
    <Menu/>
    </ProductContext.Provider>
    </>
  )
}

export default App