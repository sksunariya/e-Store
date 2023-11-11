import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/slices/CartSlice';
import { toast } from 'react-toastify';


const Product = ({post}) => {

    const {cart} = useSelector( (state) => state);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item added to Cart");
    }

    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.error("Item removed from Cart");
    }

  return (
    <div className='bg-white flex flex-col items-center justify-between w-11/12 max-w-5xl shadow-[rgba(0,_0,_0,_0.1)_10px_10px_30px]
                    hover:scale-110 hover:shadow-[rgba(0,_0,_0,_0.4)_30px_30px_90px] transition duration-300 ease-in
                    gap-3 p-4 mt-10 ml-5 rounded-xl'>
        <div>
            <p className='text-gray-700 font-semibold text-lg truncate w-40 mt-1'>{post.title.split(" ").slice(0,5).join(" ") + "..."}</p>
        </div>
        <div>
            <p className='w-40 text-gray-400 text-[10px] text-left'>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
        </div>
        <div className='h-[150px]'>
            <img src={post.image} className='w-full h-full' />
        </div>
        <div className='flex justify-between items-center gap-12'>
            <p className='text-green-600 font-semibold '>₹{(post.price * 83.3).toFixed(0)}</p>
            {
            cart.some((p) => p.id === post.id) ? 
            <button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold uppercase
                               text-[12px] p-1 px-3 hover:bg-gray-700 hover:text-white transition duration-300 ease-in' 
                               onClick={removeFromCart}>Remove Item</button> 
            : 
            <button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold uppercase
                               text-[12px] p-1 px-3 hover:bg-gray-700 hover:text-white transition duration-300 ease-in'
                    onClick={addToCart}>
                Add to Cart
            </button>
        }
        </div>

    </div>
  )
}

export default Product