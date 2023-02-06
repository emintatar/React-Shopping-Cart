import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card.jsx";

function App() {
  const [product, setProduct] = useState([
    {
      id: 1,
      title: "MSI",
      image:
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/msi/thumb/118924-5_large.jpg",
      info: "MSI GEFORCE RTX 3060 VENTUS 2X OC 12GB GDDR6 192bit NVIDIA Ekran Kartı",
      count: 1,
    },
    {
      id: 2,
      title: "ASUS",
      image:
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/128115_large.jpg",
      info: "ASUS GeForce DUAL RTX 3060 OC V2 12GB GDDR6 192Bit NVIDIA Ekran Kartı",
      count: 1,
    },
    {
      id: 3,
      title: "GIGABYTE",
      image:
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/gigabyte/thumb/136572-1-1_large.jpg",
      info: "GIGABYTE GeForce RTX 3060 GAMING OC 12GB GDDR6 192bit NVIDIA Ekran Kartı",
      count: 1,
    },
    {
      id: 4,
      title: "SAPPHIRE",
      image:
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/sapphire/thumb/136815-1_large.jpg",
      info: "SAPPHIRE PULSE Radeon RX 6700 XT 12GB GDDR6 256bit AMD Ekran Kartı",
      count: 1,
    },
  ]);

  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <h1>PRODUCT LIST</h1>
      <div className="products">
        {product.map((item, index) => {
          return (
            <Card
              onClick={() => {
                const arr = [...cart];
                if (
                  arr.findIndex((ind) => {
                    return ind.id === item.id;
                  }) === -1
                ) {
                  arr.push(item);
                  setCart(arr);
                } else {
                  arr.map((element) => {
                    if (element.id === item.id) {
                      return element.count++;
                    }
                    setCart(arr);
                  });
                }

                console.log(cart);
              }}
              key={index}
              title={item.title}
              image={item.image}
              info={item.info}
            />
          );
        })}
      </div>
      <h2>CART</h2>
      <div className="cart">
        <ul className="items">
          {cart.map((item, index) => {
            return (
              <li key={index}>
                <span className="titleInfo">
                  Model: {item.title} - {item.info}
                </span>
                <span className="count">
                  Count: <b>{item.count}</b>
                </span>
              </li>
            );
          })}
        </ul>

        {cart.length > 0 ? (
          <button
            onClick={() => {
              setCart([]);
            }}
            className="btn"
          >
            CLEAR
          </button>
        ) : (
          <h3>Your cart is empty</h3>
        )}
      </div>
    </div>
  );
}

export default App;
