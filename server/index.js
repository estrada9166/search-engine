var express       = require('express')
var app           = express();
var http          = require('http').Server(app);
var bodyParser    = require('body-parser');
var elasticsearch = require('elasticsearch');
var rp            = require('request-promise');
var mongoose      = require('mongoose');
const htmlparser  = require('htmlparser2');

var client = new elasticsearch.Client({
  host: '34.228.32.168:9200',
  log: 'trace'
});

var config  = require('./config');
var Page    = require('./models/pages');
var Pending    = require('./models/pending');

// =======================
// configuration =========
// =======================

var port = process.env.PORT || 8000;
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



class MockPagesStore {
  constructor() {
    this.pages = [{ url: "http://makeitreal.camp/", indexed: false }];
  }

  addPage(pages) {
    console.log('2. Save the data on the db')
    const promises = [];
    pages.forEach((page) => {
      // promises.push(rp({
      //   method: 'POST',
      //   uri: `http://34.228.32.168:9200/pages/`,
      //   body: {
      //     'url': page.url,
      //     'body': page.body
      //   },
      //   json: true
      // }))
      if(page) {
        const startTimer = new Date()
        const newPage = new Page();
        newPage.url = page.url;
        newPage.host = page.host;
        newPage.body = page.body;

        promises.push(newPage.save())
      }
    })
    return Promise.all(promises)
  }

  getPages() {
    console.log('1. Get the body of the page')
    const promises = [];
    const unindexedPages = this.pages.filter((page) => !page.indexed);
    const unindexedPagesLength = unindexedPages.length
    console.log(`Got: ${unindexedPagesLength}`)
    unindexedPages.forEach((page, i) => {
      page.indexed = true;
      promises.push(
        rp({
        uri: page.url,
        simple: false ,
        transform: ((body, response) =>  ({body, host: response.req._headers.host, url: page.url}))
        })
        .catch(() => {
          return
        })
      )
    })
    return Promise.all(promises)

  }

  checkSavedPage() {

  }

  getUnindexedPages() {
    console.log(this.pages)
  }


}

class Crawler {
  constructor(pagesStore) {
    this.pagesStore = pagesStore;
  }

  crawlPages(pages) {
    console.log('3. Get the pages to star crawling the links')
    console.log("Crawling " + pages.length + " unindexed pages ... ")
    const promises = [];
    pages.forEach((page) => {
      promises.push(this.crawlPage(page));
    });

    return Promise.all(promises);
  }

  crawlPage(page) {
    console.log('4. passing the links to get the pages of each')
    return new Promise ((resolve) => {
      parser.write(page.body)
      parser.end()
      paths.forEach((path) => {
        const checkIfUrl = new RegExp('(https?|ftp|file|http):')
        const checkIfPath = new RegExp('(^\/)')
        checkIfUrl.test(path)? pagesStore.pages.push({ url: path, indexed: false }) :  checkIfPath.test(path)? pagesStore.pages.push({ url: 'http://' + page.host + path, indexed: false }) : null;
      })
      paths = []
      resolve()
    })
  }
}

let paths = []
const parser = new htmlparser.Parser({
  onopentag: function(name, attribs){
    if(name === "a"){
      paths.push(attribs.href)
    }
  }
}, {decodeEntities: true});

const pagesStore = new MockPagesStore();
const crawler = new Crawler(pagesStore);

const main = () => {
  pagesStore.getPages()
  .then((pages) => {
    pagesStore.addPage(pages)
    .then((page) => crawler.crawlPages(page))
    .then(() => {
      //console.log(pagesStore.pages)
      main()
    })
  })
}



main()











// app.get('/', (req, res) => {
//   rp({
//     method: 'POST',
//     uri: 'http://34.228.32.168:9200/tutorial/helloworld',
//     body: {
//       'message': 'holaa'
//     },
//     json: true
//   })
//   .then((x) => {
//     console.log(x)
//   })
//   client.search({
//     q: 'holaa'
//   })
//   .then((body) => {
//     res.json(body.hits.hits)
//   })
// });

// app.post('/', (req, res) => {
//   client.post('/schools', (req, res) => {
//     console.log('a')
//   })
// })


// app.listen(port, function() {
//   console.log(`listening to port ${port}`)
// });