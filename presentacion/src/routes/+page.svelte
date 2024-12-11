<script>
    import MetaMaskConnect from "../lib/components/MetaMaskConnect.svelte";
    import Explorer from "../lib/components/Explorer.svelte";
    import TransactionsTable from "../lib/components/TransactionsTable.svelte"; // Importa el componente
  </script>
  
  <h1>Bienvenido a Transac-App</h1>
  <MetaMaskConnect />
  <Explorer />
  <TransactionsTable /> <!-- Aquí se muestra la tabla de transacciones -->
  