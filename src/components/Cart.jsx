import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmptyCart from "../assets/Images/emptycart.png";
import { FaTrashAlt } from 'react-icons/fa';
import Model from './Model';
import ChangeAddress from './ChangeAddress';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/CartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("Mehoo Pur Phal");
  const [isModelOpen, setIsModelOpen] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div className="container mx-auto py-8 px-4 md:px-8 lg:px-16 min-h-96">
      {cart.products.length > 0 ? (
        <div className="w-full flex flex-col md:flex-row md:space-x-10">
          {/* Left Section */}
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>
            <div className="flex justify-between border-b items-center mb-4 text-sm font-bold">
              <p>PRODUCTS</p>
              <div className="flex space-x-6">
                <p>PRICE</p>
                <p>QUANTITY</p>
                <p>SUB TOTAL</p>
                <p>REMOVE</p>
              </div>
            </div>
            <div>
              {cart.products.map((product) => (
                <div key={product.id} className="flex items-center justify-between p-3 border-b">
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-16 h-16 md:w-20 md:h-20 object-cover rounded"
                      src={product.Image}
                      alt={product.name}
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                    </div>
                  </div>
                  <div className="flex space-x-8 items-center">
                    <p>${product.price.toFixed(2)}</p>
                    <div className="flex items-center space-x-2">
                      <button onClick={()=> dispatch(decreaseQuantity(product.id))} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
                      <p>{product.quantity}</p>
                      <button onClick={()=> dispatch(increaseQuantity(product.id))} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
                    </div>
                    <p>${(product.quantity * product.price).toFixed(2)}</p>
                    <button onClick={()=> dispatch(removeFromCart(product.id))} className="text-red-500 hover:text-red-700">
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-lg font-semibold mb-5">CART TOTAL</h3>
            <div className="flex justify-between mb-5 border-b pb-2">
              <span>Total Items</span>
              <span>{cart.totalQuantity}</span>
            </div>
            <div className="mb-5 border-b pb-4">
              <p className="mb-2">Shipping</p>
              <p className="text-sm">
                Shipping to: <span className="font-bold">{address}</span>
              </p>
              <button onClick={()=> setIsModelOpen(true)} className="mt-2 text-blue-500 hover:underline">Change Address</button>
            </div>
            <div className="flex justify-between mb-5">
              <span>Total Price:</span>
              <span>${cart.totalPrice.toFixed(2)}</span>
            </div>
            <button onClick={()=>{navigate('/checkout')}} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Proceed to Checkout
            </button>
          </div>
          <Model isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
            <ChangeAddress setAddress={setAddress} setIsModelOpen={setIsModelOpen}/>
          </Model>
        </div>
      ) : (
        // Empty Cart
        <div className="flex justify-center items-center py-10">
          <img className="h-48 w-auto" src={EmptyCart} alt="Empty Cart" />
        </div>
      )}
    </div>
  );
};

export default Cart;
