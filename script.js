import ModalGenerar from "./modal.js";
import ModalNueva from "./modalNueva.js";


document.addEventListener('DOMContentLoaded', () => {
	const modalGenerar = new ModalGenerar('modal');
	const modalNuevo = new ModalNueva();
	const sidebar = document.querySelector('.sidebar-btn').onclick = () => showSidebar();
});

function showSidebar() {
	const div = document.querySelector('.page');
	const sidebar = document.getElementById('sidebar');
	if (!div.classList.contains('page-sidebar-on')) {
		div.classList.add('page-sidebar-on');
		sidebar.classList.remove('d-none');
	} else {
		div.classList.remove('page-sidebar-on');
		sidebar.classList.add('d-none');
	}
}