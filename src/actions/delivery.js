import { useDispatch } from "react-redux";
import actionTypes from "../constant/actionTypes";

const url = `/api/delivery/`;

export default () => {
  const dispatch = useDispatch();

  const loading = () =>
    dispatch({
      type: actionTypes.FETCH_DELIVERY
    });

  const succces = payload =>
    dispatch({
      type: actionTypes.FETCH_DELIVERY_SUCCESS,
      payload
    });

  const error = () =>
    dispatch({
      type: actionTypes.FETCH_DELIVERY_ERROR
    });

  const clear = () =>
    dispatch({
      type: actionTypes.CLEAR_DELIVERY
    });
  const find = () => {
    loading();
    fetch(url)
      .then(response => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then(succces)
      .catch(error);
  };
  return { clear, find };
};
