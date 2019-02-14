const resultsReducer = (state = [], action) => {
  switch (action.type) {
    
    case 'INIT_RESULTS':
      return action.payload;

    default:
      return state;
  }
};

export default resultsReducer;
