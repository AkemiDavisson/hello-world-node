//require http module
var http = require('http'); 
var server = http.createServer(function(req, res){
	//hello world response goes here.

	var url = 'http://thinkful.com';
	var body = '<span>Redirecting to <a href="' + url + '">' + url;
	res.setHeader('Location', url);
	res.statusCode = 302;
	res.setHeader('Content-Length', body.length);
	res.setHeader('Content-Type', 'text/html');
	res.end(body);
});

//added process.env.PORT (heroku's environment var)
var port = process.env.PORT || 9000;
server.listen(port, function(){
	console.log('listening on %d', port);
});
