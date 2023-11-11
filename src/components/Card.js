import React from 'react';
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

function Card (props){

    let review = props.review;

    return (
        <div className='flex flex-col md:relative w-[80vw] md:w-[650px]'>
            <div className='md:absolute top-[-7rem] z-10'>
                <img src={review.image} className='aspect-square mx-auto rounded-full w-[140px] h-[140px] z-[25]'></img>
                <div className='w-[140px] h-[140px] bg-violet-500 rounded-full hidden md:block absolute top-[-6px] -z-10 left-[10px]'></div>
            </div>

            <h2 className='text-center tracking-wider mt-7 font-bold text-2xl capitalize'>{review.name}</h2>
            <p className='text-center mt-1 uppercase text-violet-300 text-sm'>{review.job}</p>

            <div className='text-violet-400 mt-5 mx-auto'>
                <FaQuoteLeft/>
            </div>

            <p className='text-center mt-5 text-slate-500'>{review.text}</p>

            <div className='text-violet-400 mt-5 mx-auto'>
                <FaQuoteRight/>
            </div>
        </div>
    )
}

export default Card;