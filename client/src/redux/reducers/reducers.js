import { GET_PRODUCTS, GET_DETAIL } from "../actions/actions";

const initialState = {
  products: [],
  productDetail: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      };
    default:
      return state;
  }
}
