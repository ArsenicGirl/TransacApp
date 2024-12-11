<script lang="ts">
    import type { Block } from "../types"; // Importa la interfaz para los bloques
  
    let blocks: Block[] = []; // Lista de bloques
  
    // Obtiene los bloques desde tu API o blockchain
    async function fetchBlocks() {
      const response = await fetch("http://localhost:3000/blocks"); // Cambia la URL según tu API
      blocks = await response.json();
    }
  
    fetchBlocks(); // Llama a la función al cargar el componente
  </script>
  
  <h2>Explorador de Bloques</h2>
  <ul>
    {#each blocks as block}
      <li>
        <h3>Bloque #{block.blockNumber}</h3>
        <p>Hash: {block.blockHash}</p>
        <ul>
          {#each block.transactions as tx}
            <li>De: {tx.sender}, A: {tx.receiver}, Monto: {tx.amount}</li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
  