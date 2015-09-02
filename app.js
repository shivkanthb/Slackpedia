var request = require('request');
var fs = require('fs');
var express= require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function(req,res){

	res.json({msg:"hello"});
});


app.post('/slackpedia', function(req,res){


var slack_webhook_url ="https://hooks.slack.com/services/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";
 // var icon_url = ""; current an emoji is set on slack. 
var wiki_lang = "en";
var search_limit = "3";

var headers = { 
    'User-Agent': 'Slackpedia/1.0 (https://github.com/shivkanthb/Slackpedia; shivkanthb@gmail.com)'
		};

var command = req.body.command;
var token = req.body.token;
var text = req.body.text;
var channel_id = req.body.channel_id;
var user_name = req.body.user_name;

//need to encode the text received for passing it into the wikipedia url
var encoded_text = encodeURIComponent(text);

var wiki_url = "http://"+wiki_lang+".wikipedia.org/w/api.php?action=opensearch&search="+encoded_text+
"&format=json&limit="+search_limit;


	request.get({url:wiki_url, headers: headers}, function(err,response,body){
		var body = JSON.parse(body);

		console.log(body);
		res.send(body[0]);
	});
});


app.listen(port, function(){
console.log("listening on port: "+port);
});