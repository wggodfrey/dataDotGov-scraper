const path = require('path');
const morgan = require('morgan');
const express = require('express');

const app = express();
app.use(express.static(path.join(__dirname, './../public')));
app.use(morgan('combined'));



const port = 1504;
app.listen(port, () => {
  console.log(`>>>>>>>>>>>> listening on port ${port}`);
});
