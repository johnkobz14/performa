import React, { createContext, useReducer } from "react";
import FrameworkReducer from "../reducer/FrameworkReducer";
import axios from "axios";

//Initial state
const initialState = {
  cycle: [],
  cycleload: true,
  cycleperiod: [],
  cycleperiodload: true,
  pillar: [],
  pillarload: true,
  competency: [],
  competencyload: true,
  subcompetency: [],
  subcompetencyload: true,
  empdata: [],
  empdataload: true,
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

  async function getCyclePeriod(business_unit, cycle_cd) {
    try {
      const res = await axios.get(
        `/api/pmp/framework/cycleperiod/${business_unit}/${cycle_cd}`
      );

      dispatch({
        type: "GET_CYCLEPREIOD",
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

  async function getEmpAssessment(email, id) {
    try {
      const res = await axios.get(
        `/api/pmp/framework/empassessment/${email}/${id}`
      );

      dispatch({
        type: "GET_EMPASSESSMENT",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "FRAMEWORK_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function modEmpAssessment(formData) {
    try {
      const res = await axios.put(
        `/api/pmp/framework/empassessment/modify`,
        formData
      );

      dispatch({
        type: "MOD_EMPASSESSMENT",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "FRAMEWORK_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  function clrCompetency() {
    dispatch({
      type: "CLEAR_COMPETENCY",
    });
  }

  function clrSubComp() {
    dispatch({
      type: "CLEAR_SUBCOMP",
    });
  }

  function clrAssessment() {
    dispatch({
      type: "CLEAR_ASSESSMENT",
    });
  }

  return (
    <FrameworkContext.Provider
      value={{
        pillar: state.pillar,
        pillarload: state.pillarload,
        cycle: state.cycle,
        cycleload: state.cycleload,
        cycleperiod: state.cycleperiod,
        cycleperiodload: state.cycleperiodload,
        competency: state.competency,
        competencyload: state.competencyload,
        subcompetency: state.subcompetency,
        subcompetencyload: state.subcompetencyload,
        empdata: state.empdata,
        empdataload: state.empdataload,
        error: state.error,
        getCycle,
        getCyclePeriod,
        getPillar,
        getCompetency,
        getSubCompetency,
        getEmpAssessment,
        modEmpAssessment,
        clrCompetency,
        clrSubComp,
        clrAssessment,
      }}
    >
      {children}
    </FrameworkContext.Provider>
  );
};
