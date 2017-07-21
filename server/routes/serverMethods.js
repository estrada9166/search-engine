const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
  host: '34.228.32.168:9200',
  log: 'trace'
});

const search = (req, res) => {
  client.search({
    index: 'news',
    type: 'indexed',
    body: {
      'from' : req.query.from, 'size' : req.query.to,
      'sort': [
        '_score'
      ],
      'query': {
        'multi_match': {
          'query': req.params.text,
          'type': 'cross_fields',
          'fields': ['url', 'body^3']
        } 
      }
    }
  })
  .then((response) => {
    const links = response.hits.hits;
    client.count({
      index: 'news',
      type: 'indexed',
      body: {
        'query': {
          match: {
            body: req.params.text
          } 
        }
      }
    }, (error, response) => {
      res.json({
        links,
        length: response.count
      });
    }); 
  })
}

const count = (req, res) => {
  client.count({
    index: 'news',
    type: 'indexed',
    body: {
      'query': {
        "match_all": {}
      }
    }
  }, (error, response) => {
    res.json(response.count);
  });
}

module.exports = { search, count }