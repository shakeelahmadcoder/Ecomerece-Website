import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Shop from './components/Shop'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import FilterData from './components/FilterData'

const App = () => {
  return (
    <BrowserRouter> 
    <Navbar/>
    <Routes> 
      <Route path='/' element ={<Home/>} />
      <Route path='/shop' element ={<Shop/>} />
      <Route path='/cart' element ={<Cart/>} />
      <Route path='/checkout' element ={<Checkout/>} />
      <Route path='/filter-data' element ={<FilterData/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
