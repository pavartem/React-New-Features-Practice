import {SEARCH} from "../constants";

const initialState = {
    loading: false,
    hotels: null,
    hotelsError: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH.SEARCH:
            return {
                ...state,
                loading: true
            };
        case SEARCH.SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                hotels: action.searchData,
            };
        case SEARCH.SEARCH_ERROR:
            return {
                ...state,
                loading: false,
                hotelsError: action.error,
            };
        default:
            return state;
    }
};

export default authReducer;
