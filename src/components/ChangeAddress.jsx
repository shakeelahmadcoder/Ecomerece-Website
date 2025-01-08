import React, { useState } from 'react'


const ChangeAddress = ({setAddress, setIsModelOpen}) => {
    const [newAddress, setNewAddress] = useState("")
    const onClose = ()=>{
        setAddress(newAddress)
        setIsModelOpen(false)
    }
  return (
    <div>
        <input onChange={(e)=>setNewAddress(e.target.value)} placeholder='Enter new address' className='border p-2 w-full mb-2' type="text" />
        <div className='flex justify-end'>
            <button onClick={() =>setIsModelOpen(false)} className='bg-gray-500 text-white py-2 px-4 rounded mr-2'>Cancel</button>
            <button onClick={onClose} className='bg-blue-500 text-white py-2 px-4 rounded'>Save Address</button>
        </div>
    </div>
  )
}

export default ChangeAddress