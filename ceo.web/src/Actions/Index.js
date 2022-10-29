import {
  CREATE_DATA,
  DELETE_DATA,
  GET_TOKEN,
  GET_USER,
  NO_DATA,
  READ_ALL_DATA,
  UPDATE_ALERT,
  UPDATE_DATA,
} from "../Types/Index.js";

export const createAction = (data) => ({ type: CREATE_DATA, payload: data });

export const readAllAction = (data) => ({ type: READ_ALL_DATA, payload: data });

export const updateAction = (data, nameId) => ({
  type: UPDATE_DATA,
  payload: data,
  nameId: nameId,
});

export const delAction = (id, nameId) => ({
  type: DELETE_DATA,
  payload: id,
  nameId: nameId,
});

export const noAction = () => ({ type: NO_DATA });
export const updateAlert = (data) => ({ type: UPDATE_ALERT, payload: data });
export const getUser = (data) => ({ type: GET_USER, payload: data });
export const getToken = (data) => ({ type: GET_TOKEN, payload: data });
