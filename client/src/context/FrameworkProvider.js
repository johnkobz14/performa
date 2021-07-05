import React, { createContext, useReducer } from "react";
import FrameworkReducer from "../reducer/FrameworkReducer";
import axios from "axios";

//Initial state
const initialState = {
  cycle: [],
  cycleload: true,
  pillar: [],
  pillarload: true,
  error: null,
};

//Create context
export const FrameworkContext = createContext(initialState);

//Provider component
export const FrameworkProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FrameworkReducer, initialState);

  //Actions
  async function getCycle() {
    try {
      const res = await axios.get(`/api/pmp/framework/cycle`);

      dispatch({
        type: "GET_CYCLE",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "FRAMEWORK_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function getUserPillar(id) {
    try {
      const res = await axios.get(`/api/pmp/framework/${id}`);

      dispatch({
        type: "GET_USER_PILLAR",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "FRAMEWORK_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  return (
    <FrameworkContext.Provider
      value={{
        pillar: state.pillar,
        pillarload: state.pillarload,
        cycle: state.cycle,
        cycleload: state.cycleload,
        error: state.error,
        getCycle,
        getUserPillar,
      }}
    >
      {children}
    </FrameworkContext.Provider>
  );
};
