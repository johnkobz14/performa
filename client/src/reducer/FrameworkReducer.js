const FrameworkReducer = (state, action) => {
  switch (action.type) {
    case "GET_CYCLE":
      return {
        ...state,
        cycle: action.payload,
        cycleload: false,
      };
    case "GET_CYCLEPREIOD":
      return {
        ...state,
        cycleperiod: action.payload,
        cycleperiodload: false,
      };
    case "GET_PILLAR":
      return {
        ...state,
        pillar: action.payload,
        pillarload: false,
      };
    case "GET_COMPETENCY":
      return {
        ...state,
        competency: action.payload,
        competencyload: false,
      };
    case "GET_SUBCOMPETENCY":
      return {
        ...state,
        subcompetency: action.payload,
        subcompetencyload: false,
      };
    case "GET_EMPASSESSMENT":
      return {
        ...state,
        empdata: action.payload,
        empdataload: false,
      };
    case "FRAMEWORK_ERROR":
      return {
        ...state,
        pillarerr: action.payload,
      };
    default:
      return state;
  }
};

export default FrameworkReducer;
