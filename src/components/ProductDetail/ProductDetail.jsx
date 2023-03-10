import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import useCart from "../../hooks/useCart";
import "../ProductDetail/ProductDetail.scss";

const ProductDetail = () => {
  const { addOrUpdateItem } = useCart();
  const { user, login } = useAuthContext();
  const {
    state: {
      product: { id, image, title, description, catecory, price },
    },
  } = useLocation();
  const [success, setSuccess] = useState();
  const handleClick = (e) => {
    if (user) {
      const product = { id, image, title, price, quantity: 1 };
      addOrUpdateItem.mutate(product, {
        onSuccess: () => {
          setSuccess("π μ₯λ°κ΅¬λμ μΆκ°λμμ΅λλ€!");
          setTimeout(() => setSuccess(null), 3000);
        },
      });
    } else {
      login();
    }
  };

  return (
    <section className="product-detail">
      <div className="container">
        <div className="img-cover">
          <img src={image} alt={title} />
        </div>
        <div className="des-box">
          <p className="title">{title}</p>
          <span className="cate">{catecory}</span>
          <span className="price">{`${price},000 μ`}</span>
          <p className="des">{description}</p>
          {success && <span className="alert">{success}</span>}
          <div className="btn-wrapper">
            <button className="cart-btn" onClick={handleClick}>
              μ₯λ°κ΅¬λ
            </button>
            <button className="wish-btn">
              μμλ¦¬μ€νΈ <i className="xi-heart-o"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
