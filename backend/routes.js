const Media = require('./models/Media')

const express = require('express')

const router = express.Router()

const MongoClient = require('mongodb').MongoClient;
var db

const url = 'mongodb://database:27017';

MongoClient.connect(url, function(err, client){
	if (err) {
		console.log(err)
		process.exit(1)
	}
	db = client.db("all");
	db.createCollection("Media", function (err, res) {
		const testMedia = new Media("Test Book", "Test Author", "Book", "google.ca");
		db.collection("Media").insert(testMedia);
	})});

router.get('/media/all', function(req, res, next) {
	db.Media.find( {} ).then(media => {
		if (media === undefined || media.length === 0) {
			res.status(400).send([])
		} else {
			res.status(200).send(media)
		}
	})
})

module.exports = router

