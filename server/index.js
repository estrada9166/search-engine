const express       = require('express')
const app           = express();
const bodyParser    = require('body-parser');
const request       = require('request');

const { search, count } = require('./routes/serverMethods');

const port = process.env.PORT || 8000;

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb'} ));
app.use(bodyParser.json({limit: '50mb'}));
app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

var apiRoutes = express.Router();

apiRoutes.get('/search/:text/', search);

apiRoutes.get('/count', count);

app.use('/api', apiRoutes);

app.listen(port, function() {
  console.log(`listening to port ${port}`)
});

