import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_DETAIL = "GET_DETAIL";

export const getAllProducts = () => async (dispatch) => {
  try {
    const request = await axios("/products");
    const allgames = request.data;
    dispatch({ type: GET_PRODUCTS, payload: allgames });
  } catch (err) {
    console.log(err);
  }
};

export const getAllDetails = (id) => async (dispatch) => {
  try {
    const request = await axios(`/products/${id}`);
    const data = request.data;
    dispatch({ type: GET_DETAIL, payload: data });
  } catch (err) {
    console.log(err);
  }
};
