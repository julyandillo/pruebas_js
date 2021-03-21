import BotonEliminar from "./botonEliminar.js";
import BotonEditar from "./botonEditar.js";
import ModalEditar from "./modalEditar.js";

export default class Table {
    static instance = undefined;

    static getInstance() {
        if (!this.instance) {
            this.instance = new Table();
        }

        return this.instance;
    }

    constructor() {
        this.table = document.createElement('table');
        this.table.id = 'table';
        this.table.classList.add('table', 'table-sm', 'table-hover');
        const thead = this.table.createTHead();
        thead.classList.add('table-light');
        const rowThead = thead.insertRow();
        rowThead.innerHTML = `<th class="text-center">#</th><th>Texto</th><th class="text-center">Acciones</th>`;

        this.tbody = this.table.createTBody();

        this.idRowPrefix = 'fila-';

        this.modalEditar = new ModalEditar();

    }

    nuevaFila(texto) {
        const id_fila = this.tbody.rows.length + 1;
        const row = this.tbody.insertRow();
        row.id = this.idRowPrefix + id_fila;
        row.innerHTML = `<td class="text-center">${id_fila}</td><td>${texto}</td>`;

        const celda = row.insertCell(-1);
        celda.classList.add('text-center');
        // se añade un boton y se le pasa la funcion que se llamará cuando se haga click
        const btnEliminar = new BotonEliminar(() => this.removeRow(row.id));
        const btnEditar = new BotonEditar(() => this.editRow(row.id));

        celda.appendChild(btnEditar.getElement());
        celda.appendChild(btnEliminar.getElement());
    }

    addRow() {
        const id_fila = this.tbody.rows.length + 1;
        const texto = `Texto de la fila ${id_fila}`;
        this.nuevaFila(texto);
    }

    removeRow(id) {
        document.getElementById(id).remove();
    }

    editRow(id) {
        //console.log('editar', id);
        this.modalEditar.mostrar(id);
    }

    guardar() {
        console.log('guardar');
    }

    getElement() {
        return this.table;
    }
}