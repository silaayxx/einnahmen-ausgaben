const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

let transactions = [];

app.get('/transactions', (req, res) => {
    res.json(transactions);
});

app.post('/transactions', (req, res) => {
    const transaction = req.body;
    transactions.push(transaction);
    res.status(201).json(transaction);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
