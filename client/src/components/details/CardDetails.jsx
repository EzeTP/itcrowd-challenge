import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllDetails } from "../../redux/actions/actions";
import "./cardDetails.scss";
import NavBar from "../navBar/NavBar";

const CardDetails = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const detail = useSelector((state) => state.productDetail);

  useEffect(() => {
    dispatch(getAllDetails(id));
  }, [dispatch, id]);

  const handleOnClick = () => {
    navigate("/");
  };
  console.log(detail);

  return (
    <div className="detailContainer">
      <NavBar />
      {detail.brand ? (
        <div className="containerBox">
          <div className="imgContainer">
            <img src={detail.image_url} alt="" />
          </div>
          <div className="containerDescr">
            <h1>{detail.name}</h1>
            <span className="description">{detail.description}</span>
            <span className="price">${detail.price}</span>
            <img src={detail.brand.logo_url} alt="" />
            <button>Add to Card</button>
          </div>
        </div>
      ) : (
        <div className="notfound">
          <span>Nothings here</span>
        </div>
      )}
    </div>
  );
};

export default CardDetails;
