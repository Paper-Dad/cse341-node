//express web server setup
const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;

app.use(cors());
app.use(express.json());

app.use('/professional', require('./routes/professional'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});