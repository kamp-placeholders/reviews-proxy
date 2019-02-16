var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
var port = process.env.port || 3005;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
	console.log(`Express proxy server running at http://localhost:${port}`);
});