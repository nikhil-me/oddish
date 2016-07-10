var WebClient = require('@slack/client').WebClient;

var token = process.env.SLACK_API_TOKEN || require('./token');
var web = new WebClient(token);

web.team.info(function teamInfoCb(err, info) {
	if (err) {
		console.log('Error: ', err);
	} else {
		console.log('Team Info: ', info);
	}
});