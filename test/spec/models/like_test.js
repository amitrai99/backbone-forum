//define a test suite for model class

define(['app', 'conf/conf', 'models/like'], function(app, conf, LikeModel){

  describe('Test the like model' , function() {

    //runs before the first test
    //Note how this does not take any text description as first param
    before(function() {
      app.setConfig(conf);
    });

    //runs after last test
    after(function() {
      console.log('Run once after finishing all tests');
    });

    //runs before each test case
    beforeEach(function() {

    });

    it('should have a urlRoot property', function() {
      var likeObj = new LikeModel();
      likeObj.urlRoot().should.equal( conf.apis.like );
    });

  });

});
