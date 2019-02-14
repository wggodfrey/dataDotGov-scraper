const settingsReducer = (state = {}, action) => {
  switch (action.type) {
    
    case 'INIT_SETTINGS':
      return action.payload;

    case 'SET_SEARCHSTR':
      return { ...state, searchString: action.payload }

    default:
      return state;
  }
};

export default settingsReducer;
