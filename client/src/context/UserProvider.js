import React, { createContext, useReducer } from "react";
import UserReducer from "../reducer/UserReducer";
import axios from "axios";

//Initial state
const initialState = {
  user: [],
  loading: true,
  error: null,
};

//Create context
export const UserContext = createContext(initialState);

//Provider component
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  //Actions
  async function getUser(id) {
    try {
      const res = await axios.get(`/api/pmp/users/${id}`);

      dispatch({
        type: "GET_USER",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "USER_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        error: state.error,
        loading: state.loading,
        getUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
