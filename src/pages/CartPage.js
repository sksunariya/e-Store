import React from 'react'
import { useState, useEffect } from 'react';
import {useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom';
import CartItem from '../components/CartItem';
import Product from '../components/Product';
import '../index.css';

const CartPage = () => {

  const {cart} = useSelector( (state) => state );
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount (cart.reduce( (acc, curr) => acc + curr.price, 0));
    console.log("Totalamount:");
    console.log(totalAmount);
  })

  return (
    <div className='flex justify-center items-center'>

        {
          cart.length === 0 ? 
          (<div className='flex flex-col justify-center items-center gap-4 min-h-[80vh]'>
            <h1 className='font-semibold'>Your Cart is Empty!</h1>
            <NavLink to='/'>
              <button className='uppercase py-2 px-7 text-white bg-green-700 font-semibold rounded-lg'>Shop Now</button>
            </NavLink>
          </div>)
          :
          (<div className='flex flex-col-reverse md:flex-row justify-evenly w-11/12 max-w-5xl mx-auto gap-10'>
            <div>
              {
                cart.map( (item, index) => (
                  <div>
                    <div className='show-product'>
                      <Product className='show-product' key={item.id} post={item}/>
                    </div>
                    <div className='show-cart'>
                      <CartItem className='show-cart' key={item.id} item={item} />
                    </div>
                    
                  </div>
                )) 
              }
            </div>
            <div className='flex flex-col gap-5 mt-[1rem] md:mt-[5rem]'>
              <div>
                <h2 className='text-green-700 uppercase font-bold'>Your Cart</h2>
                <h2 className='text-green-700 uppercase font-bold text-3xl'>Summary</h2>
              </div>
              <p>
                <span>Total Items: <span className='font-bold'>{cart.length}</span></span>
              </p>
              <div>
                <p>Total Amount: <span className='font-bold'>₹{(totalAmount*83.3).toFixed(0)}</span></p>
                <button className='w-[19rem] mb-5 md:w-60 lg:w-72 mt-5 font-bold text-white bg-green-700 px-8 py-2.5 rounded-lg'>
                  CheckOut Now
                </button>
              </div>
            </div>
          </div>)

        }
    </div>
  )
}

export default CartPage