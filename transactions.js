const express = require('express');
const { Transaction, getTransactions, addTransaction, deleteTransaction } = require('../TransactionManager');
const router = express.Router();

router.get('/', (req, res) => {
  const transactions = getTransactions();
  res.json(transactions);
});

router.post('/', (req, res) => {
  const { date, description, amount, type } = req.body;

  if (!date || !description || !amount || !type) {
    res.status(400).send('Bad request: missing required fields');
    return;
  }

  const newTransaction = addTransaction({ date, description, amount, type });
  res.json(newTransaction);
});

router.delete('/:transaction_id', (req, res) => {
  const transactionId = req.params.transaction_id;
  const deletedTransaction = deleteTransaction(transactionId);

  if (deletedTransaction) {
    res.status(204).send();
  } else {
    res.status(404).send('Transaction not found');
  }
});

module.exports = router;


