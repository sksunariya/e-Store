import React, { useState } from 'react';
import Card from './Card';
import { reviews, fakereviews } from './data';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';

function Testimonials(){

    const [index, setIndex] = useState(0);


    function leftHandler(){
        if (index-1 < 0) setIndex(reviews.length - 1);
        else setIndex(index-1);
    }

    function rightHandler(){
        if (index+1 >= reviews.length) setIndex(0);
        else setIndex(index+1);
    }

    function randomHandler(){
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }

    return (
        <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center p-10 transition-all duration-700 hover:shadow-xla'>
            <Card review={fakereviews[index]}/>

            <div className='flex text-3xl my-5 gap-7 text-violet-400 font-bold'>
                <button onClick={leftHandler} className='cursor-pointer hover:text-violet-500'>
                    <FaChevronLeft/>
                </button>
                <button onClick={rightHandler} className='cursor-pointer hover:text-violet-500'>
                    <FaChevronRight/>
                </button>
            </div>

            <button onClick={randomHandler} className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
                Random Review
            </button>


        </div>
    )
}

export default Testimonials;