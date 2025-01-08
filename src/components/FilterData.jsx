import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

const FilterData = () => {
    const FilterProducts = useSelector(state => state.products.filteredData)
  return ( 
    <div className=''>
            <h1 className='text-2xl font-bold mb-6 text-center'>Shop</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                {FilterProducts.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>

        </div>
  )
}

export default FilterData