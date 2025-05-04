const functions = require('firebase-functions');
const express = require('express');
const app = express();

app.use(express.static('public'));

// 모든 경로에 대해 index.html을 서빙
app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

exports.app = functions.https.onRequest(app); 