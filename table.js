import BotonEliminar from "./botonEliminar";

export default class Table {
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
        const boton = new BotonEliminar(() => this.removeRow(row.id));
        celda.appendChild(boton.getElement());
    }

    removeRow(id) {
        document.getElementById(id).remove();
    }

    getElement() {
        return this.table;
    }
}