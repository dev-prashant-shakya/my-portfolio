const reducer = (state, action) => {
    switch(action.type) {
        case "GET_STORIES": 
        return {
            ...state,
            hits: action.payload.hits,
            nbPages: action.payload.nbPages
        };
        case "REMOVE_POST":
            return {
                ...state,
                hits: state.hits.filter(
                    (currentElement) => currentElement.objectID !== action.payload
                ),
            }
        case "SEARCH_POST": 
            return {
                ...state,
                query: action.payload,
            }
        case "GET_PREV_PAGE":
            let pageNum = state.page - 1;
            if(pageNum <= 0) {
                pageNum = 0;
            }
            return {
                ...state, 
                page: pageNum, 
            }
        case "GET_NEXT_PAGE":
            let pageNumInc = state.page + 1;
            if(pageNumInc >= state.nbPages) {
                pageNumInc = 0;
            }
            return {
                ...state, 
                page: pageNumInc, 
            }
    }
    return state;
}

export default reducer;