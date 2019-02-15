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
         let resources = [];
         $(elem).find('.dataset-resources li a').each((i, res) => {
           resources.push(res.children[0].data)
         });

         results.push({
           id: i,
           title: $(elem).find('.dataset-heading a')[0].children[0].data,
           description: $(elem).find('.notes div')[0].children[0].data,
           format: resources.join(', '),
         });
       });
       dispatch(initResults(results));
    });
};

export { getResults };
