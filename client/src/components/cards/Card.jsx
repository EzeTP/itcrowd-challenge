import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ id, name, img, brand, price }) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="cardsContainer" onClick={handleOnClick}>
      <div className="card">
        <img src={img} alt="img not found" />
        <span>{name}</span>
        <img src={brand} alt="img not found" />
        <span>{price}</span>
      </div>
    </div>
  );
};

export default Card;
