// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

// Middleware untuk parsing body dari request
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routing untuk halaman utama (localhost:3000 atau '/')
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

// Routing untuk API (localhost:3000/api atau '/api')
const apiRouter = require('./app'); // Import modul router dari app.js
app.use('/api', apiRouter); // Gunakan router untuk path '/api'

// Menjalankan server pada port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
