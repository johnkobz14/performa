import React, {createContext, useReducer} from 'react';
import AppReducer from "./AppReducer";
import axios from "axios";

//Initial state
const initialState = {
    user: [],
    loading: true,
    error: null
}

//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    async function getUser(id) {

        try {
            const res = await axios.get(`/api/pmp/users/${id}`);

            dispatch({
                type: "GET_USER",
                payload: res.data.data
            });
        } catch (error) {
               dispatch({
                type: "USER_ERROR",
                payload: error.response.data.error
            });
        }     
    }

    return (<GlobalContext.Provider value={{
        user: state.user,
        error: state.error,
        loading: state.loading,
        getUser
      }}>
        {children}
      </GlobalContext.Provider>); 

}