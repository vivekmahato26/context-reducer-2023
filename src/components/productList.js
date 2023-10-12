import { useContext } from "react";
import productsContext from "../context/productsContext";
import { BsFillBagCheckFill } from "react-icons/bs";

import "../styles/productList.scss";
import cartContext from "../context/cartContext";

export default function ProductList() {
  const products = useContext(productsContext);
  const { cart, dispatch } = useContext(cartContext);
  return (
    <div className="product-container">
      <div className="product-cart-container-side">
        <div className="product-cart-items">
          <BsFillBagCheckFill className="cart-icon" />
          <p className="product-cart-items-p">{cart.products.length} item{cart.products.length >1 && "s" }</p>
        </div>
        <button className="product-cart-price">${cart.totalPrice}</button>
      </div>
      {products?.map((e, i) => {
        const product = cart.products.find(p => p.id == e.id);
        let cartQty = 0;
        if(product) cartQty = product.productQty;
        return (
          <div key={i} className="product-card">
            {e.sale_price && (
              <p className="product-discount">
                {Math.ceil(((e.price - e.sale_price) / e.price) * 100)}%
              </p>
            )}
            <div className="product-img-container">
              <img className="product-image" src={e.image.original} />
            </div>
            <div className="price-container">
              {e.sale_price && <p className="product-price">${e.sale_price}</p>}
              <p
                className={`product-price ${
                  e.sale_price && "product-price-strike"
                }`}
              >
                ${e.price}
              </p>
            </div>
            <p className="product-name">{e.name}</p>
            <div className="product-cart-container">
              {cartQty > 0 && (
                <button
                  className="product-action-btn"
                  onClick={() =>
                    dispatch({ type: "removeFromCart", payload: e })
                  }
                >
                  -
                </button>
              )}
              <button
                className="product-cart-btn"
                onClick={() => dispatch({ type: "addToCart", payload: e })}
              >
                {cartQty > 0 ? cartQty : "Add"}
              </button>
              <button
                className="product-action-btn"
                onClick={() => dispatch({ type: "addToCart", payload: e })}
              >
                +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
