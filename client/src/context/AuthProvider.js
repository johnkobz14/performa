import React, { createContext, useReducer } from "react";
import AuthReducer from "../reducer/AuthReducer";
import axios from "axios";

//Initial state
const initialState = {
  auth: [],
  loading: true,
  error: null,
};

//Create context
export const AuthContext = createContext(initialState);

//Provider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //Actions
  async function getAuth() {
    await axios.get(`/api/pmp/auth/microsoft`);

    // await axios.get(`/api/pmp/auth/callback`);
  }

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        error: state.error,
        loading: state.loading,
        getAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
