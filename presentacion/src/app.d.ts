// Extiende los tipos globales de SvelteKit
declare global {
	namespace App {
		// Puedes extender estas interfaces si lo necesitas más tarde
	}

	// Declara que el objeto `ethereum` existe en `window`
	interface Window {
		ethereum: any;
	}
}

// Esto asegura que sea un módulo y evite conflictos
export {};
