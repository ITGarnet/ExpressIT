var express = require('express');
var http = require('http');
var app = express();
app.set('port', process.env.PORT || 1337);


app.get('/now', function(req, res) {
	var d = new Date();
	res.send(200, {date:d});
})

app.get('/base64', function(req, res){
	var stringToEncode = req.query.s;
	var base64EncodedString = new Buffer(stringToEncode, 'utf8').toString('base64');
	res.send(200, base64EncodedString);
});


http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});