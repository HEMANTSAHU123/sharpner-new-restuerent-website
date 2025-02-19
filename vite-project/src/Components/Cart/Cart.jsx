import React from "react";
import Modal from "../UI/Modal";
import "./Cart.css";
const Cart = () => {
  const cartitems = (
    <ul className="cart-items">
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartitems}
      <div className="total">
        <span>TotalAmount</span>
        <span>36.5</span>
      </div>
      <div className="actions">
        <button className="button--alt"> Close</button>
        <button className="button"> Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
