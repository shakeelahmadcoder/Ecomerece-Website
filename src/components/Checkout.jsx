import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Checkout = () => {
    const [billingToggle, setBillingToggle] = useState(true);
    const [addressToggle, setAddressToggle] = useState(true);
    const [paymentToggle, setPaymentToggle] = useState(true);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [shippingInfo, setShippingInfo] = useState({
        address: "",
        city: "",
        zip: ""
    })
    const cart = useSelector((state) => state.cart);

    return (
        <div className="container mx-auto py-8 px-4 md:px-8 lg:px-16 min-h-96">
            <div className="w-full flex flex-col md:flex-row md:space-x-10">
                {/* Left Section */}
                <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md border">
                    <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
                    {/* Billing Information */}
                    <div className="border-b mb-6">
                        <div className="border py-4 px-4">
                            <div onClick={() => setBillingToggle(!billingToggle)} className="flex justify-between items-center mb-4 cursor-pointer">
                                <h3 className="text-lg font-semibold">Billing Information</h3>
                                {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
                            </div>
                            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                                <div>
                                    <label className="block text-gray-700" htmlFor="name">Name</label>
                                    <input
                                        id="name"
                                        placeholder="Enter Name"
                                        className="w-full px-3 py-2 border rounded"
                                        type="text"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700" htmlFor="email">Email</label>
                                    <input
                                        id="email"
                                        placeholder="Enter Email"
                                        className="w-full px-3 py-2 border rounded"
                                        type="email"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700" htmlFor="phone">Phone</label>
                                    <input
                                        id="phone"
                                        placeholder="Enter Phone"
                                        className="w-full px-3 py-2 border rounded"
                                        type="tel"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Address Information */}
                    <div className="border-b mb-6">
                        <div className="border py-4 px-4">
                            <div onClick={() => setAddressToggle(!addressToggle)} className="flex justify-between items-center mb-4 cursor-pointer">
                                <h3 className="text-lg font-semibold">Address Information</h3>
                                {addressToggle ? <FaAngleDown /> : <FaAngleUp />}
                            </div>
                            <div className={`space-y-4 ${addressToggle ? "" : "hidden"}`}>
                                <div>
                                    <label className="block text-gray-700" htmlFor="address">Address</label>
                                    <input onChange={(e)=>setShippingInfo({...shippingInfo, address: e.target.value})}
                                        id="address"
                                        placeholder="Enter Address"
                                        className="w-full px-3 py-2 border rounded"
                                        type="text"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700" htmlFor="zip">Zip Code</label>
                                    <input
                                        id="zip"
                                        placeholder="Enter Zip Code"
                                        className="w-full px-3 py-2 border rounded"
                                        type="text"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700" htmlFor="city">City</label>
                                    <input
                                        id="city"
                                        placeholder="Enter City"
                                        className="w-full px-3 py-2 border rounded"
                                        type="text"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className="border-b mb-6">
                        <div className="border py-4 px-4">
                            <div onClick={() => setPaymentToggle(!paymentToggle)} className="flex justify-between items-center mb-4 cursor-pointer">
                                <h3 className="text-lg font-semibold">Payment Method</h3>
                                {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
                            </div>
                            <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                                <div>
                                    <label className="block text-gray-700">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="card"
                                            checked={paymentMethod === 'card'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="mr-2"
                                        />
                                        Credit/Debit Card
                                    </label>
                                </div>
                                {paymentMethod === 'card' && (
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-gray-700" htmlFor="card">Card Number</label>
                                            <input
                                                id="card"
                                                placeholder="Enter Card Number"
                                                className="w-full px-3 py-2 border rounded"
                                                type="text"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700" htmlFor="expiry">Expiry Date</label>
                                            <input
                                                id="expiry"
                                                placeholder="MM/YY"
                                                className="w-full px-3 py-2 border rounded"
                                                type="text"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700" htmlFor="cvv">CVV</label>
                                            <input
                                                id="cvv"
                                                placeholder="Enter CVV"
                                                className="w-full px-3 py-2 border rounded"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                )}
                                <div>
                                    <label className="block text-gray-700">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="cod"
                                            checked={paymentMethod === 'cod'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="mr-2"
                                        />
                                        Cash on Delivery
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
                    <h3 className="text-xl font-semibold border-b pb-4 mb-4">Order Summary</h3>
                    <div className="space-y-4">
                        {cart?.products?.length > 0 ? (
                            cart.products.map((product, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between border-b pb-4 mb-4 last:border-b-0 last:mb-0"
                                >
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={product.Image}
                                            alt={product.name}
                                            className="w-16 h-16 object-cover rounded-md"
                                        />
                                        <div>
                                            <h4 className="text-lg font-medium text-gray-800">{product.name}</h4>
                                            <p className="text-sm text-gray-600">
                                                ${product.price.toFixed(2)} x {product.quantity}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-lg font-semibold text-gray-800">
                                            ${(product.price * product.quantity).toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-600 text-center">No products in the cart.</p>
                        )}
                    </div>

                    {cart?.products?.length > 0 && (
                        <div className="mt-6">
                            <div className="flex justify-between text-lg font-semibold text-gray-800">
                                <span>Total:</span>
                                <span>${cart.totalPrice?.toFixed(2)}</span>
                            </div>
                            <button
                                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition duration-200"
                                onClick={() => alert('Order Placed!')}
                            >
                                Place Order
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Checkout;
