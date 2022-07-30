import axios from "axios";
import { GET_ALL_TRANSACTIONS, GET_LAST_TRANSACTIONS, GET_USER_BALANCE } from "./const";

export function actionCreator(actionType, data) {
  return {
    type: actionType,
    payload: data,
  };
}

export const fetchAllTransactions = function () {
  return async function (dispatch) {
    try {
      const res = await axios.get("/transactions");
      dispatch(actionCreator(GET_ALL_TRANSACTIONS, res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchLastTransactions = function () {
  return async function (dispatch) {
    try {
      const res = await axios.get("/transactions/last");
      dispatch(actionCreator(GET_LAST_TRANSACTIONS, res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const postTransaction = function (transacData) {
  return async function () {
    try {
      await axios.post("/transactions", transacData);
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUserBalance = function (userId) {
  return async function (dispatch) {
    try {
      const res = await axios.get("/transactions/balance", userId);
      dispatch(actionCreator(GET_USER_BALANCE, res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const putTransaction = function (data) {
  return async function () {
    try {
      await axios.put("/transactions/", data);
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteTransaction = function (idTransaction) {
  return async function () {
    try {
      await axios.delete(`/transactions/${idTransaction}`);
    } catch (error) {
      console.log(error);
    }
  };
};
