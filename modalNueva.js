import Table from "./table.js";

export default class ModalNueva {
    constructor() {
        this.modal = document.getElementById('modal-nueva');
        this.modal.addEventListener('show.bs.modal', () => this.setBlank());

        this.modalBS = new bootstrap.Modal(this.modal);

        this.btnGuardar = document.getElementById('nueva');
        this.btnGuardar.onclick = () => this.addRow();

        this.input = document.getElementById('texto-nuevo');

        this.table = document.getElementById('table');
    }

    setBlank() {
        this.input.value = '';
    }


    addRow() {
        const tabla = Table.getInstance();
        tabla.nuevaFila(this.input.value);

        this.modalBS.hide();
    }
}