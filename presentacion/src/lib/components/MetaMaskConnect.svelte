<script lang="ts">
    let account: string | null = null;  // Guarda la cuenta conectada de MetaMask
    let receiver: string = "";  // Dirección del receptor
    let amount: number = 0;  // Monto de la transacción
  
    // Función para conectar MetaMask y obtener la cuenta
    async function connectMetaMask() {
      if (typeof window.ethereum === "undefined") {
        console.error("MetaMask no está instalado");
        return;
      }
  
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        account = accounts[0];
      } catch (error) {
        console.error("Error al conectar MetaMask:", error);
      }
    }
  
    // Función para crear una transacción a través del backend
    async function createTransaction() {
      if (!account || !receiver || amount <= 0) {
        console.error("Faltan datos para crear la transacción");
        return;
      }
  
      try {
        const response = await fetch("http://localhost:3000/create-transaction", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            receiver,
            amount
          }),
        });
  
        const result = await response.json();
        console.log('Transacción creada:', result);
      } catch (error) {
        console.error('Error al crear transacción:', error);
      }
    }
  </script>
  
  <!-- Interfaz de usuario -->
  <button on:click={connectMetaMask}>Conectar MetaMask</button>
  <p>{account ? `Cuenta conectada: ${account}` : "MetaMask no está conectado."}</p>
  
  {#if account}
    <div>
      <input type="text" bind:value={receiver} placeholder="Dirección del receptor" />
      <input type="number" bind:value={amount} placeholder="Monto" />
      <button on:click={createTransaction}>Crear Transacción</button>
    </div>
  {/if}
  