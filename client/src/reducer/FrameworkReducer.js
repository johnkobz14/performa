const FrameworkReducer = (state, action) => {
  switch (action.type) {
    case "GET_CYCLE":
      return {
        ...state,
        cycle: action.payload,
        cycleload: false,
      };
    case "GET_USER_PILLAR":
      return {
        ...state,
        pillar: action.payload,
        pillarload: false,
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
