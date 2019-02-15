import axios from 'axios';
import cheerio from 'cheerio';

const initResults = results => ({
  type: 'INIT_RESULTS',
  payload: results,
});

const getResults = (searchString = '') => dispatch => {
  const url = `https://catalog.data.gov/dataset?q=${searchString}`;
  axios.get(url)
    .then(({ data }) => {
       let $ = cheerio.load(data);
       let results = [];
       $('.dataset-content').each((i, elem) => {
         results.push({
           id: i,
           title: $(elem).find('.dataset-heading a')[0].children[0].data,
           description: $(elem).find('.notes div')[0].children[0].data,
         });
       });
       dispatch(initResults(results));
    });
};

export { getResults };
