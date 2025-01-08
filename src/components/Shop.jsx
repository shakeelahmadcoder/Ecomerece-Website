import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

const Shop = () => {
    const products = useSelector(state => state.products)
    return (
        <div className=''>
            <h1 className='text-2xl font-bold mb-6 text-center'>Shop</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                {products.products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>

        </div>
    )
}

export default Shop