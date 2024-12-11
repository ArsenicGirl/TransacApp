const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/blockchainDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Definición del esquema de transacciones
const transactionSchema = new mongoose.Schema({
  sender: String,
  receiver: String,
  amount: Number,
  timestamp: Date,
  blockHash: String,
});

const Transaction = mongoose.model('Transaction', transactionSchema);

// Configuración del servidor
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Endpoint para obtener transacciones
app.get('/transactions', async (req, res) => {
  const transactions = await Transaction.find();
  res.json(transactions);
});

// Endpoint para agregar una transacción
app.post('/transactions', async (req, res) => {
  const { sender, receiver, amount, blockHash } = req.body;
  const transaction = new Transaction({
    sender,
    receiver,
    amount,
    timestamp: new Date(),
    blockHash,
  });
  await transaction.save();
  res.json({ message: 'Transaction saved!', transaction });
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
