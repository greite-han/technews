const functions = require('firebase-functions');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

exports.app = functions.https.onRequest(app); 