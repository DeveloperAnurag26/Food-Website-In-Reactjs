import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
    const [menu, setmenu] = useState("Home")
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className="logo" />
        <ul className="navbar-menu">
            <Link to='/' onClick={()=> setmenu("Home")} className={menu === "Home" ? "active": ""}>Home</Link>
            <a href='#explore-menu' onClick={()=> setmenu("Menu")} className={menu === "Menu"? "active": ""}>Menu</a>
            <a href='#app-download' onClick={()=> setmenu("Mobile-app")} className={menu === "Mobile-app"? "active": ""}>Mobile-app</a>
            <a href='#footer' onClick={()=> setmenu("contact us")} className={menu === "contact us"? "active": ""}>contact us </a>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="" />
                <div className="dot"> </div>
            </div>
            <button onClick={()=>setShowLogin(true)}>Sign in</button>
        </div>
      
    </div>
  )
}

export default Navbar
