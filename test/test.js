var assert = require('assert'),
 teespring = require('../index');

describe('API Tests', function(){
  describe('search', function(){
    it('Should return 200, status OK', function(){
      teespring.teeSearch("tesla", 1, function(result){
        assert.notEqual(result, 500, "All good");
        assert.notEqual(result.hits, null, "We've got some hits!");
      });
    })
  })
})
