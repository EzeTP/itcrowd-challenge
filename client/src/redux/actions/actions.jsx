import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_DETAIL = "GET_DETAIL";

export const getAllProducts = () => async (dispatch) => {
  try {
    let request = await axios("/products");
    const allgames = request.data;
    dispatch({ type: GET_PRODUCTS, payload: allgames });
  } catch (err) {
    console.log(err);
  }
};
