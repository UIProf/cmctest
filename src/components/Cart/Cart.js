import { useState, useEffect } from "react";
import "./Cart.scss";

import { useSelector } from "react-redux";

import CartItem from "./CartItem/CartItem";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const cart = useSelector( state => state.shop.cart);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div className={'cart'}>
      <div className={'cart__items'}>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className={'cart__summary'}>
        <h4 className={'cart__summary__title'}>Cart Summary</h4>
        <div className={'cart__summary__price'}>
          <span>TOTAL: ({totalItems} items)</span>
          <span>$ {totalPrice}</span>
        </div>
        <button className={'cart__summary__checkoutBtn'}>
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};


export default Cart;
