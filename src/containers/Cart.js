import React from 'react'

const Cart = ({cartTotal,cartData,menuData,removeFromCart}) => {
  return (
    <div className="cartitems">
            <h2 className="heading">Cart</h2>
            <div className="cart-area">
            {
              Object.keys(cartData).map((sku,index)=>{
                return(
                <div class="cart-item" key={index} >
                  <span class="item-text">{menuData[sku].productName} x {cartData[sku]}</span>
                  <span class="item-total">₹{menuData[sku].price}</span>
                  <button class="remove-butn" data-sku="123923080" onClick={()=>removeFromCart(sku)} >-</button>
                </div>
                )


              })
            }
              <div className="cart-total">
                <div className="cart-item">
                  <span className="item-text"> Total </span>
                  <p className="item-total">₹<span class="total-amount">{cartTotal}</span></p>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Cart