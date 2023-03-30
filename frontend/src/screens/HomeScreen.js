import "./HomeScreen.css";
import Product from "../components/Product";
import { useState, useEffect } from "react";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/products", {
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
          },
        });
        if (!response.ok) {
          throw new Error("An error occurred while fetching the products");
        }

        const products = await response.json();
        setProducts(products);
        console.log(products);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        {products.map((product) => (
          <Product
            key={product._id}
            imgSrc={product.imgUrl}
            name={product.name}
            description={product.description}
            price={product.price}
            infoButton={product.infoButton}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
