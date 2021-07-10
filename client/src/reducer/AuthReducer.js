const AuthReducer = (state, action) => {
  switch (action.type) {
    case "GET_AUTH":
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case "AUTH_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;
