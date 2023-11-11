import React from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { remove } from '../redux/slices/CartSlice'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed")
  }

  return (
    <div>
        
      <div className='mb-5 pt-5 flex gap-10 border-t-2 border-gray-900'>
        <div className='w-[140px]'>
          <img src={item.image} className='h-full w-full'/>
        </div>
        <div className='flex flex-col gap-4 xs:w-[10rem] w-full md:w-[19rem]'>
          <h1 className='text-gray-700 font-semibold text-lg mt-1'>{item.title}</h1>
          <h1 className=' text-gray-400 text-left'>{item.description.slice(0,75) + "..."}</h1>
          <div className='flex items-center justify-between'>
            <p className='text-green-600 font-semibold '>₹{(item.price * 83.3).toFixed(0)}</p>
            <div className='mr-10 border-gray-700 rounded-full p-2 text-red-500 bg-red-200'
                                onClick={removeFromCart}>
              <AiFillDelete/>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CartItem