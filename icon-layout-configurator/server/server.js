const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3001;

app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'Images')));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Images/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '_' + file.originalname);
  }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), (req, res) => {
  if (req.file) {
    res.json({ filename: req.file.filename });
  } else {
    res.status(400).send('No file uploaded.');
  }
});

app.get('/images', (req, res) => {
  fs.readdir('Images', (err, files) => {
    if (err) {
      res.status(500).send('Error reading directory');
    } else {
      res.json(files);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});