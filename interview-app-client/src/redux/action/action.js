import actionTypes from "../constant/actionType";
import axios from "axios";

export const getUsers = () => dispatch => {
  axios
    .get("/user")
    .then(res => {
      dispatch({
        type: actionTypes.FETCH_USER,
        payload: res.data
      });
    })
    .catch(err => console.log("err", err));
};

export const addUser = (userData, action) => dispatch => {
  axios
    .post("/user", userData)

    .then(res => dispatch(getUsers()))
    .then(res => action())
    .catch(err => console.log("err", err));
};
