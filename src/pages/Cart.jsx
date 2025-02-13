
import React, { use, useState } from "react";
import { useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import Model from "../components/Model";
import ChangeAddress from "../components/ChangeAddress";
import { removeFromCart,increment,decrement } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";



function Cart() {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("Main Street, 0012");
  const [isModelOpen,setIsModelOpen]=useState(false)
  const dispatch = useDispatch()
  const navigate=useNavigate()

  return (
    <div className="container mt-5">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-center mb-4">Shopping Cart</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="card shadow-sm p-3">
                <p className="fw-bold">PRODUCTS</p>
                <div className="d-flex justify-content-between border-bottom pb-2">
                  <p className="fw-bold">Price</p>
                  <p className="fw-bold">Quantity</p>
                  <p className="fw-bold">SubTotal</p>
                  <p className="fw-bold">Remove</p>
                </div>
                <div>
                  {cart.products.map((product) => (
                    <div key={product.id} className="d-flex align-items-center justify-content-between border-bottom py-2">
                      <div className="d-flex align-items-center">
                        <img src={product.image} alt="" className="img-fluid me-3" style={{ width: "80px", height: "80px" }} />
                        <h5 className="m-0">{product.name}</h5>
                      </div>
                      <p className="m-0">$ {product.price}</p>
                      <div className="d-flex align-items-center">
                        <button className="btn btn-outline-secondary btn-sm" onClick={()=>dispatch(decrement(product.id))}>-</button>
                        <p className="mx-2">{product.quantity}</p>
                        <button className="btn btn-outline-secondary btn-sm"onClick={()=>dispatch(increment(product.id))}>+</button>
                      </div>
                      <p className="m-0">$ {(product.quantity * product.price).toFixed(2)}</p>
                      <button className="btn btn-danger btn-sm" onClick={()=>dispatch(removeFromCart(product.id))}>
                        <FaTrashAlt />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm p-3">
                <h3 className="text-center">Cart Total</h3>
                <div className="d-flex justify-content-between">
                  <span className="fw-bold">Total Quantity:</span>
                  <span>{cart.totalQuantity}</span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <p className="fw-bold">Shipping</p>
                  <p>Shipping To:</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span>{address}</span>
                  <button className="btn btn-outline-primary btn-sm" onClick={()=> setIsModelOpen(true)}>Change Address</button>
                </div>
                <div className="d-flex justify-content-between mt-3">
                  <span className="fw-bold">Total Price:</span>
                  <span className="fw-bold">${cart.totalPrice.toFixed(2)}</span>
                </div>
                <button className="btn btn-success w-100 mt-3" onClick={()=>navigate('/checkout')}>Proceed To Checkout</button>
              </div>
            </div>
          </div>
          <Model isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen} >
          <ChangeAddress setAddress={setAddress} setIsModelOpen={setIsModelOpen} /> 
          </Model>
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <h1>The Cart Is Empty</h1>
        </div>
      )}
    </div>
  );
}

export default Cart;
