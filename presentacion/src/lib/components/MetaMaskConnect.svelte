<script lang="ts">
//Este componente se encarga de conectar con MetaMask y mostrar la cuenta conectada.


  import { ethers } from "ethers"; // Librería para interactuar con la blockchain

  let account: string | null = null; // Variable para almacenar la cuenta conectada

  async function connectMetaMask() {
    try {
      // Solicita a MetaMask que conecte la cuenta
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      account = accounts[0]; // Guarda la primera cuenta conectada
    } catch (error) {
      console.error("Error al conectar MetaMask:", error);
    }
  }
</script>

<!-- Botón para conectar MetaMask -->
<button on:click={connectMetaMask}>Conectar MetaMask</button>
<p>{account ? `Cuenta conectada: ${account}` : "MetaMask no está conectado."}</p>
