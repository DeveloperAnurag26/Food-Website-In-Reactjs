import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Pages/Home/Home'
import Cart from './Components/Pages/Home/Cart/Cart'
import PlaceOrder from './Components/Pages/PlaceOrder/PlaceOrder'

import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer/>

    </>
  )
    
  
}
 

export default App
