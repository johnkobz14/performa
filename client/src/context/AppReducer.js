const AppReducer = (state, action) => {
    switch(action.type) {
      case "GET_USER":
        return {
          ...state,
          loading: false,
          user: action.payload
        }
          case 'USER_ERROR':
        return {
          ...state,
          error: action.payload
        }
      default:
        return state;
    }
  }

  export default AppReducer;