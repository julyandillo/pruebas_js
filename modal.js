import Table from "./table.js";

export default class ModalController {
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

        const table = Table.getInstance();
        for(let i = 0; i < this.inputFilas.value; i++) {
            table.addRow();
        }

        document.querySelector('.tabla-autogenerada').appendChild(table.getElement());
        document.getElementById('nueva-fila').classList.remove('d-none');

        const btnGuardar = document.createElement('button');
        btnGuardar.classList.add('btn', 'btn-sm', 'btn-info', 'float-right');
        btnGuardar.innerText = 'Guardar';
        btnGuardar.onclick = () => table.guardar();
        document.querySelector('.tabla-autogenerada').appendChild(btnGuardar);

        this.modalBS.hide();
    }
}