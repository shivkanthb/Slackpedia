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


var slack_webhook_url ="";
var icon_url = "";
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

});


app.listen(port, function(){
console.log("listening on port: "+port);
});