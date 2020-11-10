/* eslint-disable no-unused-vars */
import React, { useReducer } from "react";
import PropTypes from "prop-types";
import HouseReducer from "./houseReducer";
import HouseContext from "./houseContext";
import {
  GET_FOR_RENT_PROPERTIES,
  GET_FOR_SALE_PROPERTIES,
  GET_FOR_SOLD_PROPERTIES,
  GET_PROPERTY,
} from "./type";
import axios from "axios";

const HouseState = ({ children }) => {
  const headers = {
    "x-rapidapi-key": "d5df4416e0msha1fa2f582d3c9cdp120ad8jsna6eca2a8cb91",
    "x-rapidapi-host": "realtor.p.rapidapi.com",
  };
  const initialState = {
    forSale: [],
    isLoading: true,
    currentProperty: {},
  };

  const [state, dispatch] = useReducer(HouseReducer, initialState);

  const getForSale = async () => {
    const options = {
      method: "GET",
      url: "https://realtor.p.rapidapi.com/properties/v2/list-for-sale",
      params: {
        city: "New York City",
        limit: 200,
        offset: 0,
        state_code: "NY",
        sort: "relevance",
      },
      headers,
    };

    const { data } = await axios.request(options);
    // console.log(data.properties);
    dispatch({
      type: GET_FOR_SALE_PROPERTIES,
      payload: data.properties,
    });
  };

  const getCurrentProperty = async (id) => {
    const options = {
      method: "GET",
      url: "https://realtor.p.rapidapi.com/properties/v2/detail",
      params: { property_id: id },
      headers,
    };
    const { data } = await axios.request(options);
    dispatch({
      type: GET_PROPERTY,
      payload: data.properties[0],
    });
  };

  return (
    <HouseContext.Provider
      value={{
        forSale: state.forSale,
        isLoading: state.isLoading,
        currentProperty: state.currentProperty,
        getForSale,
        getCurrentProperty,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

HouseState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HouseState;