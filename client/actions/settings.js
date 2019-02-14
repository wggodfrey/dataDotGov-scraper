
const initSettings = settings => ({
  type: 'INIT_SETTINGS',
  payload: settings,
});

const setSearchString = string => ({
  type: 'SET_SEARCHSTR',
  payload: string,
});

const getSettings = () => dispatch => {
  const settings = {
    searchString: 'test',
    limitCount: null,
    orderBy: null,
    filterLocation: null,
    filterTopic: null, 
    filterDataType: null,
    filterDataFormat: null,
  }

  dispatch(initSettings(settings));
}

export { 
  getSettings, setSearchString
};