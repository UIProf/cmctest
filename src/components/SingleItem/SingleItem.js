import "./SingleItem.scss";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

const SingleItem = () => {
  const current = useSelector(state => state.shop.currentItem);
  const dispatch = useDispatch();
  return (
    <div className={'singleItem'}>
      <img
        className={'singleItem__image'}
        src={current.image}
        alt={current.title}
      />
      <div className={'singleItem__details'}>
        <p className={'singleItem__details__title'}>{current.title}</p>
        <p className={'singleItem__details__description'}>{current.description}</p>
        <p className={'singleItem__details__price'}>$ {current.price}</p>

        <button
          onClick={() => dispatch(addToCart(current.id))}
          className={'singleItem__details__addBtn'}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
