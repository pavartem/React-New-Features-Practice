import {SEARCH} from "../constants";

const search = () => ({
    type: SEARCH.SEARCH,
});

const setSearchData = searchData => ({
    type: SEARCH.SEARCH_SUCCESS,
    searchData,
});

const setSearchError = error => ({
    type: SEARCH.SEARCH_ERROR,
    error,
});

export {
    search,
    setSearchData,
    setSearchError
};
