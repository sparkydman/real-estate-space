/* eslint-disable no-unused-vars */
import {
  GET_FOR_RENT_PROPERTIES,
  GET_FOR_SALE_PROPERTIES,
  GET_FOR_SOLD_PROPERTIES,
  GET_PROPERTY,
} from "./type";

export default (state, action) => {
  switch (action.type) {
    case GET_FOR_SALE_PROPERTIES:
      return {
        ...state,
        forSale: [...action.payload],
        isLoading: false,
      };
    case GET_PROPERTY:
      return {
        ...state,
        currentProperty: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
