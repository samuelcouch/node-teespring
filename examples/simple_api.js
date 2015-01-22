var express = require('express'),
     friend = require('port-friends'),
     spring = require('../lib/api_requests');

var app = express();

app.set('port', 3000);

app.get('/:campaign_search', function(req, res){
  var query = req.params.campaign_search;
  spring.searchSpring(query, 10, function(result){
    if(result == 500){
      res.status(500).json({
        status: 500,
        message: "Looks like something went wrong, sorry about that!"
      });
    }
    else{
      result.status = 200;
      result.message = "OK";
      res.status(200).json(result);
    }
  });
});

app.listen(app.get('port'), friend(
  {
    myport: app.get('port'),
    mode: app.get('env')
   }
 ));