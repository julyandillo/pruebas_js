import ModalController from "./modal";

document.addEventListener('DOMContentLocaded', () => {
	const my_modal = new ModalController('modal');
});

/*class Modal {
	constructor(id_modal) {
		this.modal = document.getElementById(id_modal);
		// cada vez que se muestre el modal lo inicializa (input en blanco y quita el posible alert)
		this.modal.addEventListener('show.bs.modal', () => this.setBlank());

		this.inputFilas = document.getElementById('filas');

		this.btnGenerar = document.getElementById('modal-generar');
		this.btnGenerar.onclick = () => this.generateTable();

		this.alert = document.getElementById('alert-modal');

		// para poder ocultar el modal hay que tener el objeto de boostrap (ya no hace falta usar jquery)
		this.modalBS = new bootstrap.Modal(this.modal);
	}

	setBlank() {
		this.inputFilas.value = '';
		this.alert.classList.add('d-none');
	}

	generateTable() {
		if (!this.inputFilas.value) {
			this.alert.classList.remove('d-none');
			return;
		}

		const table = new Table();
		document.querySelector('.tabla-autogenerada').appendChild(table.getElement());
		for(let i = 0; i < this.inputFilas.value; i++) {
			table.addRow();
		}

		this.modalBS.hide();
	}
}*/

/*class Table {
	constructor() {
		this.table = document.createElement('table');
		// this.table.id = 'table';
		this.table.classList.add('table', 'table-striped', 'table-hover', 'table-sm');
		const thead = this.table.createTHead();
		thead.innerHTML = `<td class="text-center">#</td><td>Texto</td><td class="text-center">Acciones</td>`;
		this.idRowPrefix = 'fila-';
	}

	addRow() {
		const id_fila = this.table.rows.length + 1;
		const row = this.table.insertRow();
		row.id = this.idRowPrefix + id_fila;
		row.innerHTML = `<td class="text-center">${id_fila}</td><td>Texto de la fila ${id_fila}</td>`;

		const celda = row.insertCell(-1);
		celda.classList.add('text-center');
		// se añade un boton y se le pasa la funcion que se llamará cuando se haga click
		const boton = new BotonEliminarFila(() => this.removeRow(row.id));
		celda.appendChild(boton.getElement());
	}

	removeRow(id) {
		document.getElementById(id).remove();
	}

	getElement() {
		return this.table;
	}
}*/

/*class BotonEliminarFila {
	constructor(callback) {
		this.boton = document.createElement('button');
		this.boton.classList.add('btn', 'btn-sm', 'btn-outline-danger');
		this.boton.innerHTML = `<i class="fa fa-trash"></i>`;
		this.boton.onclick = callback;
	}

	getElement() {
		return this.boton;
	}
}*/

