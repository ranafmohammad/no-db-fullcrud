const express = require ('express');
const bodyParser = require ('body-parser');
const routes = require ('./routes/routes')
const morgan = require ('morgan');

// to run express server we decalre a variable and invoke express, then we use middlewares with express to enhance he functionality

const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));
routes(app);
const port = 3001;

app.listen(port, () => {
  console.log('Listening on port: ', port);
});