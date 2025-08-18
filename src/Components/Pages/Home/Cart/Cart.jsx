import React, { useContext } from 'react'
import './Cart.css'
import { Storecontext } from '../../../../context/StoreContext'
import { food_list } from '../../../../assets/assets';

const Cart = () => {

  const { cartItems, foo_list, removeFromCart, getTotalCartAmount } = useContext(Storecontext);
  return (




    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>

        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id]>0) {
            return (

              <>
              <div className='cart-items-title cart-items-item'>
                <img src={item.image} alt="" srcset="" />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price * cartItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
              </div>
              
              </>
              
              


            )
          }
        })}
      </div>
<div className="cart-bottom">
  <div className="cart-total">
    <h2>Cart Totals</h2>
    <div>
      <div className="cart-total-details">
<p>Subtotal</p>
<p>${getTotalCartAmount()}</p>
      </div>
      <hr />
      <div className="cart-total-details">
        <p>Delivery Fee</p>
        <p>${2}</p>

      </div>
      <hr />
      <div className="cart-total-details">
<b>Total</b>
<b>${getTotalCartAmount()+2}</b>
      </div>
      
    </div>
    <button>Procees To CheckOut</button>
  </div>
  <div className="card-promocode">
<div>
  <p>If You have a Promo Code, Enter here</p>
  <div className="card-promocode-input">
    <input type="text" placeholder='promo code' />
    <button>Submit</button>
  </div>
</div>
  </div>
</div>
    </div>
  )
}

export default Cart
