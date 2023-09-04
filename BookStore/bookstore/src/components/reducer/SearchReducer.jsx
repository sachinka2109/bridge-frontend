export const setSearchQuery = (query) => ({
    type: 'SET_SEARCH_QUERY',
    payload: query,
});

const initialState = {
    searchQuery: ''
};
  
  
const SearchReducer = (state = initialState, action) => {
switch (action.type) {
    case 'SEARCH':
        return {
            ...state,
            searchQuery: action.payload 
        }
    default:
        return state;
}
};

export default SearchReducer;
