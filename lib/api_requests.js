var request = require('request'),
         Qs = require('qs'),
       conf = require('./conf.js');

var searchSpring = function(cq, hpp, cb){
  var clean_query = cq.replace(/\'/g, '\\\'');
  var p = {
    query: clean_query,
    hitsPerPage: hpp.toString(),
    attributesToRetrieve: '["name", "url", "description", "tag_names", "front_text", "back_text", "id"]',
    page: '0'
  };
  var api_request = {
    url: conf.ALGOLIA_URL + "?X-Algolia-API-Key=" + conf.ALGOLIA_API_KEY + "&X-Algolia-Application-Id=" + conf.ALGOLIA_APP_ID + "&X-Algolia-TagFilters=" + conf.ALGOLIA_TAGFILTERS,
    method: 'POST',
    json: {
      "params": Qs.stringify(p)
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
