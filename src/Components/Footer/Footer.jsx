import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer'id='footer'>
        <div className="footer-content">

<div className="footer-content-left">
<img src={assets.logo} alt="" srcset="" />
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cumque veniam voluptatum porro magnam eius incidunt quae recusandae et culpa est atque hic facere sequi, esse aspernatur cum harum nesciunt.</p>
<div className="footer-social-icons">
    <img src={assets.facebook_icon} alt="" srcset="" />
    <img src={assets.twitter_icon} alt="" srcset="" />
    <img src={assets.linkedin_icon} alt="" srcset="" />
</div>
</div>
<div className="footer-content-center">
<h2>Company</h2>
<ul>
    <li>Home</li>
    <li>About us</li>
    <li>Delivery</li>
    <li>Privacy Policy</li>
</ul>
</div>
<div className="footer-content-right">
<h2>Get In Touch</h2>
<ul>
    <li>+1-222-456-789</li>
    <li>contact@withme</li>
</ul>
</div>
        </div>
<hr />
<p className="footer-copyrights">Copyrights 2025 &#169;Tomato.com - All Right Reserved

</p>
      
    </div>
  )
}

export default Footer
