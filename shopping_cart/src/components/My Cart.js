

import { useEffect, useState } from "react";
import "../App.css";

function MyCart({ cart }) {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  return (
    <div style={{ padding: "10px 20px" }}>
      {CART.map((cartItem, cartIndex) => {
        return (
          <div key={cartIndex} style={{ display: "flex" }}>
            <img
              style={{ padding: "5px" }}
              height={50}
              src={cartItem.url}
              alt=""
            />
            <p style={{ width: "20%" }}>{cartItem.name}</p>
            <p style={{ width: "10%" }}>
              <button
                onClick={() => {
                  const newCart = CART.map((item, index) => {
                    return cartIndex === index
                      ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 1 }
                      : item;
                  });
                  setCART(newCart);
                }}
              >
                -
              </button>
              {cartItem.quantity}
              <button
                onClick={() => {
                  const newCart = CART.map((item, index) => {
                    return cartIndex === index
                      ? { ...item, quantity: item.quantity + 1 }
                      : item;
                  });
                  setCART(newCart);
                }}
              >
                +
              </button>
            </p>
            <p style={{ width: "10%" }}>Rs. {cartItem.price * cartItem.quantity}</p>
          </div>
        );
      })}
      <div style={{ margin: "50px" }}>
        <span style={{ color: "red", fontSize: "30px", padding: "10px" }}>
          Rs.{" "}
          {CART.map((item) => item.price * item.quantity).reduce(
            (total, value) => total + value,
            0
          )}
          /-
        </span>
        <button>Proceed to pay</button>
      </div>
    </div>
  );
}

export default MyCart;