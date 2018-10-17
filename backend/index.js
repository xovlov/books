const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./routes.js')
const app = express()
const http = require('http').Server(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', routes)
app.use(function(req, res) {
	res.status(404)
});

http.listen(80, function() {
	console.log("Listening on port 80")
});

module.exports = app
