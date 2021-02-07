import axios from '../http';
import {
  GET_PROPERRTY_DETAIL_FAIL,
  GET_PROPERRTY_DETAIL_REQUEST,
  GET_PROPERRTY_DETAIL_SUCCESS,
} from '../constants/properties';

export default (propertyId) => async (dispatch) => {
  try {
    dispatch({ type: GET_PROPERRTY_DETAIL_REQUEST });

    const { data } = await axios.get(`/property/${propertyId}`);
    dispatch({
      type: GET_PROPERRTY_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_PROPERRTY_DETAIL_FAIL,
      payload:
        err.response.data && err.response.data.error.message
          ? err.response.data.error.message
          : err.message,
    });
  }
};
