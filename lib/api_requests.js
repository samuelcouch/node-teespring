var request = require('request'),
         Qs = require('qs'),
       conf = require('./conf.js');

var searchSpring = function(cq, hpp, cb){
  var clean_query = cq.replace(/\'/g, '\\\'');
  var p = {
    query: clean_query,
    hitsPerPage: hpp.toString(),
    restrictSearchableAttributes: '["name", "url", "description", "tag_names", "front_text", "back_text", "id"]',
    numericFilters: '["publicly_searchable=1"]',
    page: '0'
  };
  var api_request = {
    url: conf.ALGOLIA_URL,
    method: 'POST',
    json: {
      "params": Qs.stringify(p),
      "apiKey": conf.ALGOLIA_API_KEY,
      "appID": conf.ALGOLIA_APP_ID
    }
  };

  request(api_request, function (err, resp, body) {
    if (!err){
      cb(body);
    }
    else{
      cb(500);
    }
  });
};

exports.searchSpring = searchSpring;