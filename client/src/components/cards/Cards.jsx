import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/actions";
import Card from "./Card";
import "./cards.scss";
import NavBar from "../navBar/NavBar";

const Cards = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  console.log(products);
  return (
    <div className="container">
      <div className="navbar">
        <NavBar />
      </div>
      {products.map((p) => (
        <Card
          key={p.id}
          id={p.id}
          name={p.name}
          description={p.description}
          img={p.image_url}
          brand={p.brand.logo_url}
          price={p.price}
        />
      ))}
    </div>
  );
};

export default Cards;
