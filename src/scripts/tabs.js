// Gerenciar abas
function showTab(tabIndex) {
	const tabs = document.querySelectorAll('.tab-content');
	const buttons = document.querySelectorAll('.tab-nav button');
	tabs.forEach((tab, index) => {
		tab.classList.toggle('hidden', index + 1 !== tabIndex);
	});

	// Atualizar as cores dos botões
	buttons.forEach((button, index) => {
		if (index + 1 === tabIndex) {
			button.classList.add('bg-blue-500'); // Botão ativo
			button.classList.remove('bg-gray-400'); // Remover cor inativa
		} else {
			button.classList.add('bg-gray-400'); // Botões inativos
			button.classList.remove('bg-blue-500'); // Remover cor ativa
		}
	});
}

// Abrir modal
function openModal() {
	document.getElementById('confirmationModal').classList.remove('hidden');
}

// Fechar modal
function closeModal() {
	document.getElementById('confirmationModal').classList.add('hidden');
}