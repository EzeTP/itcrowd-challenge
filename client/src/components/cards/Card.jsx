import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.scss";

const Card = ({ id, name, img, brand, price }) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="cardsContainer" onClick={handleOnClick}>
      <div className="card">
        <img className="imgProduct" src={img} alt="img not found" />
        <div className="cardText">
          <span>{name}</span>
          <span>{price}</span>
          <img className="imgBrand" src={brand} alt="img not found" />
        </div>
      </div>
    </div>
  );
};

export default Card;
