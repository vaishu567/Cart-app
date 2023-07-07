import React from 'react'

const Menu = ({menuData, addToCart}) => {
  return (
   <div className='menuitems' >
        <h2 className="heading">Menu</h2>
        <div className="menu-area">
          {/* menu items */}
          {
            Object.keys(menuData).map((keys,index)=>{
              return(
                <div className="menu-item" key={index} >
                  <span className="menu-text">{menuData[keys].productName}- ₹ {menuData[keys].price}</span>
                  <span className="menu-action"><button onClick={()=>addToCart(keys)} >+</button></span>
                </div>          
              )
            })
          }
        </div>
    </div>      
    
  )
}

export default Menu