<script lang="ts">
    import type { Transaction } from "../types"; // Importamos la interfaz de Transacción
  
    let transactions: Transaction[] = []; // Lista de transacciones
  
    // Función para obtener las transacciones desde la API
    async function fetchTransactions() {
      const response = await fetch("http://localhost:3000/transactions"); // Cambia a la URL de tu API
      transactions = await response.json();
    }
  
    fetchTransactions(); // Llamamos la función al cargar el componente
  </script>
  
  <h2>Transacciones</h2>
  <table>
    <thead>
      <tr>
        <th>Enviado Por</th>
        <th>Recibido Por</th>
        <th>Monto</th>
        <th>Hash del Bloque</th>
      </tr>
    </thead>
    <tbody>
      {#each transactions as tx}
        <tr>
          <td>{tx.sender}</td>
          <td>{tx.receiver}</td>
          <td>{tx.amount}</td>
          <td>{tx.blockHash}</td>
        </tr>
      {/each}
    </tbody>
  </table>
  