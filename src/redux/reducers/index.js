const initialState = {
  favoriteCompanies: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favoriteCompanies: {
          ...state.favoriteCompanies,
          content: [...state.favoriteCompanies.content, action.payload],
        },
      };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favoriteCompanies: {
          ...state.favoriteCompanies,
          content: state.favoriteCompanies.content.filter((company) => company !== action.payload),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
