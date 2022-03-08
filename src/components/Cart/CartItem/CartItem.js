import { useState } from "react";
import "./CartItem.scss";
import deleteImg from "../../../assets/delete.svg";

import { useDispatch } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../../redux/Shopping/shopping-actions";

const CartItem = ({ item }) => {
  const [input, setInput] = useState(item.qty);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    dispatch(adjustItemQty(item.id, e.target.value));
  };

  return (
    <div className={'cartItem'}>
      <img
        className={'cartItem__image'}
        src={item.image}
        alt={item.title}
      />
      <div className={'cartItem__details'}>
        <p className={'cartItem__details__title'}>{item.title}</p>
        <p className={'cartItem__details__desc'}>{item.description}</p>
        <p className={'cartItem__details__price'}>$ {item.price}</p>
      </div>
      <div className={'cartItem__actions'}>
        <div className={'cartItem__qty'}>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className={'cartItem__actions__deleteItemBtn'}
        >
          <img
            src={deleteImg}
            alt=""
          />
        </button>
      </div>
    </div>
  );
};


export default CartItem;
