// Firebase Hosting은 정적 파일만 서빙하므로 이 파일은 필요하지 않습니다.
// public/index.html이 직접 서빙됩니다. 

const express = require('express');
const path = require('path');
const app = express();

// 정적 파일 서빙
app.use(express.static('public'));

// 모든 요청에 대해 index.html을 서빙
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
}).on('error', (err) => {
  console.error('Server failed to start:', err);
  process.exit(1);
}); 