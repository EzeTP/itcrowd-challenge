import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllDetails } from "../../redux/actions/actions";

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
      {detail.brand ? (
        <div className="container2">
          <img src={detail.id} alt="" />
          <img src={detail.image_url} alt="" />
          <span>{detail.name}</span>
          <span>{detail.description}</span>
          <span>{detail.price}</span>
          <img src={detail.brand.logo_url} alt="" />
        </div>
      ) : (
        <div className="notfound">
          <span>Nothing here</span>
        </div>
      )}
      <button onClick={handleOnClick}>Home</button>
    </div>
  );
};

export default CardDetails;
