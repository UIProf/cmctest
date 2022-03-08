import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cartImage from "../../assets/cart.png";
import "./Navbar.scss";

import { useSelector } from "react-redux";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const cart = useSelector(state => state.shop.cart)

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className={'navbar'}>
      <Link to="/" className={'navbar__link'}>
        <h2 className={'navbar__logo'}>CMC Product</h2>
      </Link>
      <Link to="/cart" className={'navbar__link'}>
        <div className={'navbar__cart'}>
          <h3 className={'navbar__cart__title'}>Cart</h3>
          <img
            className={'navbar__cart__image'}
            src={cartImage}
            alt="shopping cart"
          />
          <div className={'navbar__cart__counter'}>{cartCount}</div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
