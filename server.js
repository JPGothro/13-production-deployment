var express = require('express'),
  // TODO: require in our request proxy module
  requestProxy = require('express-request-proxy'),
  port = process.env.PORT || 3000,
  app = express();

// TODO: now use our proxy within a function to request
//        our github data on the server.

function proxyGitHub(request, response) {
  (requestProxy({
    url: 'https://api.github.com/' + request.params[0],
//    url: 'https://api.github.com/' + request.params[0] + '?per_page=10&sort=updated',
    data: '&access_token=' + process.env.ACCESS_TOKEN_GITHUB
  }))(request, response);
};

app.get('/github/*', proxyGitHub);

app.use(express.static('./'));

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', { root: '.' });
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
