import { useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config/config";

import "./Products.scss";

// Redux
import { useSelector, useDispatch } from "react-redux";

import Product from "./Product/Product";
import { loadProducts } from "../../redux/Shopping/shopping-actions";

const Products = () => {
  const products = useSelector(state => state.shop.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const LoadAllProdcucts = async () => {
      try {
        const response = await axios.get(API_URL);
        const products = response.data;
        console.log(products);
        dispatch(loadProducts(products));
      } catch (error) {
        console.error(error);
      }
    };
    LoadAllProdcucts();
  }, [dispatch])

  

  return (
    <div className={'products'}>
      {products && products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
