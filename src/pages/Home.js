import React, { useState, useEffect } from 'react'
import Product from '../components/Product';
import Testimonials from '../components/Testimonials';

const Home = () => {

    const API_URL = 'https://fakestoreapi.com/products';
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    async function fetchProductData(){
        setLoading(true);

        try {
            const res = await fetch(API_URL);
            const data = await res.json();

            setPosts(data);
            console.log(posts);
        }
        catch (error) {
            console.log("Can't fetch data.");
        }
        setLoading(false);
    }

    useEffect( () => {
        fetchProductData();
    },[])

  return (
    <div className='bg-gray-200'>
        {
            loading ? <p className='min-h-screen font-bold text-2xl flex justify-center items-center'>Loading...</p> :
            posts.length > 0 ? 
            (<div className='flex flex-col'>
                <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-11/12 max-w-6xl mx-auto p-2 space-y-10 space-x-5 min-h-[80vh]'>
                    {
                        posts.map( (post) => (
                            <Product key={post.id} post={post} />
                        ))
                    }
                </div>



                      
                <div className='py-20 flex flex-col gap-5 justify-center items-center bg-gray-200'>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold'>Testimonials</h1>
                    <div className='h-1 mt-1 bg-violet-400'></div>
                </div>
                <Testimonials/>
                </div>




            </div>) :
            <div className='min-h-[80vh] font-bold text-2xl flex justify-center items-center'>
                <p>No Data Found</p>
            </div>
        }

    </div>
  )
}

export default Home