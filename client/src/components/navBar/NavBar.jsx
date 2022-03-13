import React from "react";
import { useNavigate } from "react-router";
import "./navbar.scss";

const navBar = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/");
  };

  return (
    <div className="navbar">
      <h1 onClick={handleOnClick}>It Crowd</h1>
    </div>
  );
};

export default navBar;
