var fs = require('fs');
var path = require('path');

var WebClient = require('@slack/client').WebClient;

var token = process.env.SLACK_API_TOKEN || require('./token');
var web = new WebClient(token);

var filePath = path.resolve(process.cwd(), 'upload-a-file.js');
var fileName = 'test_file.csv';

// File upload via content param
var contentOpts = {
  content: fs.readFileSync(filePath)
};

web.files.upload(fileName, contentOpts, function handleContentFileUpload(err, res) {
  console.log(res);
});

// File upload via file param
var streamOpts = {
  file: fs.createReadStream(filePath)
};

web.files.upload(fileName, streamOpts, function handleStreamFileUpload(err, res) {
  console.log(res);
});