const express = require('express');
const { ethers } = require('ethers');
const bodyParser = require('body-parser');
const contractABI = require('./path/to/TransactionContract.json'); // Ruta al ABI del contrato

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Configura el proveedor de Ethereum (usando Infura, Alchemy o Ganache)
const provider = new ethers.JsonRpcProvider('http://localhost:8545'); // Cambia la URL si usas una red diferente
const wallet = new ethers.Wallet('YOUR_PRIVATE_KEY', provider); // Asegúrate de tener la clave privada correcta
const contractAddress = 'CONTRACT_ADDRESS'; // Dirección del contrato

// Crea una instancia del contrato
const contract = new ethers.Contract(contractAddress, contractABI.abi, wallet);

// Endpoint para crear una transacción en la blockchain
app.post('/create-transaction', async (req, res) => {
  const { receiver, amount } = req.body;

  try {
    // Llama a la función del contrato para crear la transacción
    const tx = await contract.createTransaction(receiver, amount);
    console.log('Transacción enviada:', tx);

    // Esperar la confirmación de la transacción
    const receipt = await tx.wait();

    // Enviar la respuesta con el recibo de la transacción
    res.status(200).json({
      message: 'Transacción exitosa',
      transactionHash: receipt.transactionHash,
      blockHash: receipt.blockHash
    });
  } catch (error) {
    console.error('Error al crear transacción:', error);
    res.status(500).json({ error: 'Error al crear la transacción' });
  }
});

app.listen(port, () => {
  console.log(`Backend escuchando en http://localhost:${port}`);
});
