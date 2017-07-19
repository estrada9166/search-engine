const express       = require('express')
const app           = express();
const http          = require('http').Server(app);
const bodyParser    = require('body-parser');
const elasticsearch = require('elasticsearch');
const rp            = require('request-promise');
const mongoose      = require('mongoose');
const request = require('request');
const htmlparser  = require('htmlparser2');

const client = new elasticsearch.Client({
  host: '34.228.32.168:9200',
  log: 'trace'
});

const config  = require('./config');
const Page    = require('./models/pages');
const Pending    = require('./models/pending');

// =======================
// configuration =========
// =======================

const port = process.env.PORT || 8000;
mongoose.connect(config.database);

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

apiRoutes.get('/search/:text/', (req, res) => {
  client.search({
    index: 'pages',
    type: 'indexed',
    body: {
      'from' : req.query.from, 'size' : req.query.to,
      'sort': [
        '_score'
      ],
      'query': {
        multi_match: {
          query: req.params.text,
          fields: ['url', 'body']
        }
      }
    }
  })
  .then((body) => {
    res.json(body.hits.hits)    
  })
});



app.get('/count', (req, res) => {
  client.count({
    index: 'pages'
  }, function (error, response) {
    res.json(response.count);
  });
});


app.use('/api', apiRoutes);

app.listen(port, function() {
  console.log(`listening to port ${port}`)
});