import React, { useState } from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setSearchTerm } from '../redux/ProductSlice'

const Navbar = () => {
  const products = useSelector(state => state.cart.products)
  const [search, setSearch] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSearch = (e)=>{
    e.preventDefault();
    dispatch(setSearchTerm(search)) 
    navigate('/filter-data')
  }
  return (
    <nav className='bg-white  shadow-md'>
      <div className=' container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
        {/* for logo */}
<div> 
  <Link to="/" className='text-xl font-bold'>e-SHOP</Link>
</div>
{/* for form  */}
<div className='relative flex-1 px-4'>
<form onSubmit={handleSearch}>
  <input onChange={((e)=>{setSearch(e.target.value)})} className='w-full border px-4 py-2' type="text" placeholder='Search Product'/>
  <FaSearch className='absolute top-3 right-7 text-red-500'/>
</form>
</div>
{/* for user icons  */}
<div className='flex items-center space-x-4'>
  <Link to="/cart" className='relative'>
  <FaShoppingCart className='text-3xl'/>
  {products.length > 0 && <span className='absolute top-0 text-xs w-3 left-3 bg-red-600 text-white rounded-full px-2'>{products.length}</span>}
  </Link>
  
  <button className='hidden md:block'>
    Login | Register
  </button>
  <button className='block md:hidden'>
    <FaUser/>
  </button>

</div>

      </div>

      <div className='flex items-center justify-center space-x-10 text-sm  font-bold py-3'>
        <Link className='hover:underline' to="/">Home</Link>
        <Link className='hover:underline' to="/shop">Shop</Link>
        <Link className='hover:underline' to="/contact">Contact</Link>
        <Link className='hover:underline' to="/about">About</Link>
      </div>
    </nav>
  )
}

export default Navbar