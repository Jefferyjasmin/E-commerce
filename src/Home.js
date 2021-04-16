import React, { useState } from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  const [product, setProduct] = useState([
    {
      id: 1,
      title: "candles light night",
      price: 2,
      rating: 5,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Candel.JPG/1200px-Candel.JPG",
    },
    {
      id: 2,
      title: "candles light night",
      price: 11.5,
      rating: 5,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Candel.JPG/1200px-Candel.JPG",
    },
    {
      id: 3,
      title: "candles light night",
      price: 11.5,
      rating: 5,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Candel.JPG/1200px-Candel.JPG",
    },
    {
      id: 4,
      title: "candles light night",
      price: 11.5,
      rating: 5,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Candel.JPG/1200px-Candel.JPG",
    },
  ]);
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://media.istockphoto.com/photos/melting-candle-on-cool-blue-background-picture-id1016998564?k=6&m=1016998564&s=612x612&w=0&h=B4-pIf9cdFd1MuZMdDx2sG6pnuqdFParWivbtzEWOZg="
        alt="canldes"
        style={{ width: "100%", height: "400px" }}
      />
      <div className="home_row">
        <Product
          id="1"
          title="candles light night"
          price={11.5}
          rating={5}
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Candel.JPG/1200px-Candel.JPG"
        />
        <Product
          id="1"
          title="candles light night"
          price={11.5}
          rating={5}
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Candel.JPG/1200px-Candel.JPG"
        />
      </div>
      <div className="home_row">
        {product.map((item) => (
          <Product
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
