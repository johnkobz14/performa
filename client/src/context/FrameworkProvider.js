import React, { createContext, useReducer } from "react";
import FrameworkReducer from "../reducer/FrameworkReducer";
import axios from "axios";

//Initial state
const initialState = {
  cycle: [],
  cycleload: true,
  pillar: [],
  pillarload: true,
  competency: [],
  competencyload: true,
  subcompetency: [],
  subcompetencyload: true,
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

  async function getPillar() {
    try {
      const res = await axios.get(`/api/pmp/framework/pillar`);

      dispatch({
        type: "GET_PILLAR",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "FRAMEWORK_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function getCompetency(id) {
    try {
      const res = await axios.get(`/api/pmp/framework/competency/${id}`);

      dispatch({
        type: "GET_COMPETENCY",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "FRAMEWORK_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function getSubCompetency(id) {
    try {
      const res = await axios.get(`/api/pmp/framework/subcompetency/${id}`);

      dispatch({
        type: "GET_SUBCOMPETENCY",
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
        competency: state.competency,
        competencyload: state.competencyload,
        subcompetency: state.subcompetency,
        subcompetencyload: state.subcompetencyload,
        error: state.error,
        getCycle,
        getPillar,
        getCompetency,
        getSubCompetency,
      }}
    >
      {children}
    </FrameworkContext.Provider>
  );
};
