import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./Reducer";

let API = 'https://hn.algolia.com/api/v1/search?';

const initialState = {
    query: "",
    nbPages: 0,
    page: 0,
    hits: [],
};

const AppContext = React.createContext();
const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchApiData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            dispatch({type: "GET_STORIES",
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages
                }
            })
        }
        catch (error) {
            console.log(error)
        }
    };

    const removePost = (post_Id) => {
        dispatch({type: 'REMOVE_POST', payload: post_Id});
    }

    const searchPost = (searchQuery) => {
        dispatch({type: 'SEARCH_POST', payload: searchQuery });
    }

    const getNextPage = () => {
        dispatch({type: 'GET_NEXT_PAGE'})
    }

    const getPrevPage = () => {
        dispatch({type: 'GET_PREV_PAGE'})
    }

    useEffect (() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    }, [state.query, state.page]);

    return (
        <AppContext.Provider value={{...state, removePost, searchPost, getNextPage, getPrevPage}}>
            {children}
        </AppContext.Provider>
    )
}

const useGobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGobalContext};