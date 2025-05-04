// Firebase Hosting은 정적 파일만 서빙하므로 이 파일은 필요하지 않습니다.
// public/index.html이 직접 서빙됩니다. 

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 