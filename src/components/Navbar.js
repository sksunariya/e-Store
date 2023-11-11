import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const {cart} = useSelector( (state) => state );

  return (
    <div>
        <nav className="flex justify-between items-center w-11/12 max-w-5xl h-20 mx-auto">
            <NavLink to='/'>
                <div className='flex items-center'>
                    <FaShoppingCart className='w-20 scale-[200%] text-blue-500' />
                    <span className='text-2xl text-blue-300 -ml-6'>e-Store</span>
                </div>
                
            </NavLink>
            
            <div className='text-white flex gap-10 items-center'>
                <NavLink to='/'>
                    <p>Home</p>
                </NavLink>
                
                <NavLink to='/cart'>
                    <div className='relative'>
                        <FaShoppingCart className='text-xl'/>
                        {
                            cart.length > 0 &&
                            <span className='absolute -top-1 -right-1.5 bg-green-600 text-xs w-4 h-4 flex justify-center items-center animate-bounce rounded-full text-white'>{cart.length}</span>
                        }
                    </div>
                </NavLink>
                
            </div>
        </nav>
    </div>
  )
}

export default Navbar