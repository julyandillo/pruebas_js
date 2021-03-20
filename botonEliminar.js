import Boton from "./boton.js";

export default class BotonEliminar extends Boton {
    constructor(callback) {
        super(callback);

        this.setIcon('fa fa-trash');
        this.setStyle('btn-outline-danger');
    }
}