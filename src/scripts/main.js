// Referências dos elementos
const menuButton = document.getElementById("menu-button");
const closeButton = document.getElementById("close-menu");
const menuModal = document.getElementById("menu-modal");
const modalContent = document.getElementById("modal-content");

// Abrir o modal lateral
menuButton.addEventListener("click", () => {
	menuModal.classList.remove("hidden");
	setTimeout(() => {
		modalContent.classList.remove("-translate-x-full");
	}, 10); // Espera o tempo da transição para mover o modal
});

// Fechar o modal lateral
closeButton.addEventListener("click", () => {
	modalContent.classList.add("-translate-x-full");
	setTimeout(() => {
		menuModal.classList.add("hidden");
	}, 300); // Tempo de transição antes de esconder completamente
});

// Fechar ao clicar fora do modal
menuModal.addEventListener("click", (e) => {
	if (e.target === menuModal) {
		modalContent.classList.add("-translate-x-full");
		setTimeout(() => {
			menuModal.classList.add("hidden");
		}, 300);
	}
});