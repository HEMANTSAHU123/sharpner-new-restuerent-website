import React from "react";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../Store/CartContext";
import CartItem from "./Cartitem";
import "./Cart.css";
const Cart = (props) => {
  const CartCtx=useContext(CartContext)
  const totalAmount = `$${CartCtx.totalAmount.toFixed(2)}`;
  const hasitems=CartCtx.items.length>0
  const cartRemovehandler=(id)=>{
    CartCtx.removeItem(id)
  }
  const cartItemHandler=(item)=>{
CartCtx.addItem({...item,amount:1})
  }
  const cartitems = (
    <ul className="cart-items">
      {CartCtx.items.map((item) => (
        <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartRemovehandler.bind(null,item.id)} onAdd={cartItemHandler.bind(null,item) }/>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartitems}
      <div className="total">
        <span>TotalAmount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onClose}> Close</button>
        {hasitems && <button className="button"> Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
