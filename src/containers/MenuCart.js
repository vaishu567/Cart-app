import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import Cart from './Cart'

const MenuCart = () => {
    const [menuData, setMenuData]=useState({
        // sku - stock keeping unit as the key and the detals are the values:
        "123923080":{
            productName:"HeadPhones",
            price: 2090

        },
        "794880903":{
            productName:"Jammer",
            price:1500
        },
        "623478027":{
            productName:"Laptop",
            price:90000
        },
        "813880301":{
            productName:"Mouse",
            price:700
        },
        "4123758986":{
            productName:"Keyboard",
            price:8900
        }
    })
    const [cartTotal,setCartTotal]=useState(0);
    const [cartData, setCartData]=useState({});
    const addToCart=(sku)=>{
        let newCart={...cartData};
        if (sku in cartData){
            newCart[sku]+=1
        }else{
            newCart[sku]=1
        }

        setCartData(newCart);

        console.log(cartData)


    };
    const removeFromCart=(sku)=>{
        let newCart={...cartData};

        if (sku in cartData ){
            newCart[sku]-=1;
            if (newCart[sku]<1){
                delete newCart[sku]
            }
        }

        setCartData(newCart);




    };

    useEffect(()=>{
        let total=0
        Object.keys(cartData).map((sku,_)=>{
            let qan=cartData[sku];
            let price=menuData[sku].price;
            total+=qan*price;
            return(total)

        })
        setCartTotal(total)
    },[cartData])


  return (
    <div className='menu-cart' >
    <Menu menuData={menuData} addToCart={addToCart} />
    <Cart cartTotal={cartTotal} menuData={menuData} cartData={cartData} removeFromCart={removeFromCart} />

    </div>
  )
}

export default MenuCart