export default class ModalEditar {
    constructor() {
        this.modalBS = new bootstrap.Modal(document.getElementById("modal-editar"));
        this.inputTexto = document.getElementById('texto');

        this.btnEditar = document.getElementById('editar');
        this.btnEditar.onclick = () => this.editar();
    }

    mostrar(id_fila) {
        this.fila = document.getElementById(id_fila);
        this.inputTexto.value = this.fila.querySelector('td:nth-child(2)').innerText;

        this.modalBS.show();
    }

    editar() {
        this.fila.querySelector('td:nth-child(2)').innerText = this.inputTexto.value;
        this.modalBS.hide();
    }
}