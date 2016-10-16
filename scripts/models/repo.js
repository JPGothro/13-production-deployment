(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];

  reposObj.requestRepos = function(callback) {
    // TODO: refactor this request into an $.ajax call
    console.log('requestRepos called');
    var request = $.ajax({
      url: '/github/users/codefellows-portland-301d6/repos',
      method: 'GET'
      // ,
      // data: 'access_token=' + process.env.ACCESS_TOKEN_GITHUB
    }).done(function(data) {
      reposObj.allRepos = data;
    }).done(callback);
  };

  reposObj.withTheAttribute = function(attr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[attr];
    });
  };

  module.reposObj = reposObj;
})(window);
