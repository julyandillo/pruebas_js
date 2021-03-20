import BotonEliminar from "./botonEliminar.js";
import BotonEditar from "./botonEditar.js";

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
        // no hace falta sumar 1 porque el thead ya tiene un tr que cuenta para rows
        const id_fila = this.table.rows.length;
        const row = this.table.insertRow();
        row.id = this.idRowPrefix + id_fila;
        row.innerHTML = `<td class="text-center">${id_fila}</td><td>Texto de la fila ${id_fila}</td>`;

        const celda = row.insertCell(-1);
        celda.classList.add('text-center');
        // se añade un boton y se le pasa la funcion que se llamará cuando se haga click
        const btnEliminar = new BotonEliminar(() => this.removeRow(row.id));
        const btnEditar = new BotonEditar(() => this.editRow(row.id));

        celda.appendChild(btnEditar.getElement());
        celda.appendChild(btnEliminar.getElement());
    }

    removeRow(id) {
        document.getElementById(id).remove();
    }

    editRow(id) {
        console.log('editar', id);
    }

    getElement() {
        return this.table;
    }
}