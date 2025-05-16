const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());

app.get('/api/data', (_req, res) => {
  const items = [
    { id: 1, title: 'First Item' },
    { id: 2, title: 'Second Item' },
  ];
  res.json(items);
});

app.listen(PORT, () => {
  console.log(`Express API listening at http://localhost:${PORT}`);
});
