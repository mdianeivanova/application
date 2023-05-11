const express = require('express');
const bodyParser = require('body-parser');
const transactionsRouter = require('./transactions');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/transactions', transactionsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
