export interface Transaction {
    sender: string;        // Dirección del remitente
    receiver: string;      // Dirección del receptor
    amount: number;        // Monto de la transacción
  }
  
  export interface Block {
    blockNumber: number;   // Número del bloque
    blockHash: string;     // Hash del bloque
    transactions: Transaction[]; // Lista de transacciones
  }
  