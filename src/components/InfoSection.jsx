import React from 'react'
import { FaHeadset, FaLock, FaShippingFast, FaTag } from 'react-icons/fa'
import { FaMoneyBill1Wave } from 'react-icons/fa6'

const InfoSection = () => {
    const InfoItems = [
        {
            icon: <FaShippingFast className='text-3xl text-red-600'/>,
            title: 'Free Shipping',
            description: "Get Your Orders delivered with no extra cost"
        },
        {
            icon: <FaHeadset className='text-3xl text-red-600'/>,
            title: 'Support 24/7',
            description: "We are here to assist you any time"
        },
        {
            icon: <FaMoneyBill1Wave className='text-3xl text-red-600'/>,
            title: '100% Money Back',
            description: "Full refund if you are not satisfied"
        },
        {
            icon: <FaLock className='text-3xl text-red-600'/>,
            title: 'Payment Secure',
            description: "Your payment information is safe with us"
        },
        {
            icon: <FaTag className='text-3xl text-red-600'/>,
            title: 'Discount',
            description: "Enjoy the best price on our products"
        },
    ]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-4'>
        {InfoItems.map((item, index)=> (
            <div className='flex flex-col p-5 bg-white shadow-md text-center items-center rounded-lg border' key={index}> 
                {item.icon} 
                <h2>{item.title}</h2>
                <p>{item.description}</p>
            </div>
        ))}
    </div>
  )
}

export default InfoSection