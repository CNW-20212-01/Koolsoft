import React from "react";
import "./Home.css";
import Product from "../components/Product";
import { products } from "../data";

const Home = () => {
  return (
    <>
      <div className="container">
        {products.map((item) => {
          return <Product key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

export default Home;
