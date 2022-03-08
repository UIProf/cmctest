import { Link } from "react-router-dom";
import "./Product.scss";

// Redux
import { useDispatch } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/Shopping/shopping-actions";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className={'product'}>
      <img
        className={'product__image'}
        src={product.image}
        alt={product.title}
      />

      <div className={'product__details'}>
        <p className={'product__details__title'}>{product.title}</p>
        <p className={'product__details__desc'}>{product.description}</p>
        <p className={'product__details__price'}>$ {product.price}</p>
      </div>

      <div className={'product__buttons'}>
        <Link to={`/product/${product.id}`}>
          <button
            onClick={() => dispatch(loadCurrentItem(product))}
            className={`${'product__buttons__btn'} ${'product__buttons__view'}`}
          >
            View Item
          </button>
        </Link>
        <button
          onClick={() => dispatch(addToCart(product.id))}
          className={`${'product__buttons__btn'} ${'product__buttons__add'}`}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};


export default Product;
