import React, { useEffect } from 'react'
import {Categories, mockData} from "../assets/mockData"
import HeroImage from "../assets/Images/hero-page.png"
import InfoSection from '../components/InfoSection'
import CategorySection from '../components/CategorySection'
import { setProducts } from '../redux/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import Shop from '../components/Shop'

const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector(state=>state.products);
    useEffect(() => {
      dispatch(setProducts(mockData))
    }, [])
    
  return (
    <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4'>
        {/* Home  */}
        <div className='flex flex-col md:flex-row gap-2 '>
            {/* left for categories   */}
            <div className='w-full md:w-3/12'>
                <h1 className='bg-red-600 text-white font-bold'>SHOP BY CATEGORIES</h1>
                {Categories.map((category, index)=>(
                    <div key={index} className='bg-red-200 p-2'> 
                    <div className='flex items-center gap-2 font-bold text-sm'> 
                        <div className='h-3 w-3 bg-green-500 '></div>
                        {category}
                    </div>
                    </div>
                ))}
            </div>
            {/* right for image  */}
            <div className='relative w-full '>
                <img className='h-full w-full bg-cover' src={HeroImage} alt="heroImage" />
                <div className='absolute top-16 left-12 flex flex-col gap-4'>
                    <p className='text-gray-600'>Shakeel Ahmed Shop</p>
                    <h1 className='text-2xl sm:text-3xl font-bold'>WELCOME TO E-SHOP</h1>
                    <h2 className='text-xl font-bold'>MILLIONS+ PRODUCTS</h2>
                    <button className='bg-red-600 px-4 py-2 text-white font-bold'>SHOP NOW</button>
                </div>
            </div>
        </div>
        {/* Info Category  */}
        <InfoSection/>
        <CategorySection/>
        <div className='container mx-auto py-12'>
            <h1 className='text-2xl font-bold mb-6 text-center'>Top Products</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                {products.products.slice(0,5).map((product, index)=>(
                    <ProductCard key={index} product = {product} />
                ))}
            </div>
        </div>
        <Shop/>
    </div>
  )
}

export default Home