import React from 'react'
import ManCategory from "../assets/Images/man.png"
import WomanCategory from "../assets/Images/woman.png"
import KidCategory from "../assets/Images/kid.png"
const CategorySection = () => {
    const categories = [
        {
            title: 'Men',
            imageUrl: ManCategory
        },
        {
            title: 'Women',
            imageUrl: WomanCategory
        },
        {
            title: 'Kids',
            imageUrl: KidCategory
        }
    ]
  return (
    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4'>
        {categories.map((category, index)=>(
            <div className='relative rounded-lg' key={index}> 
                <img className='w-full h-full object-cover shadow-md rounded-lg transform transition-transform hover:scale-105 duration-300' src={category.imageUrl} alt="imageUrl" />
                <div className='absolute top-16 left-8'> 
                    <p className='text-2xl font-bold'>{category.title}</p>
                    <p>View All</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CategorySection