import Boton from "./boton.js";

export default class BotonEditar extends Boton {
    constructor(callback) {
        super(callback);
        this.setIcon('fa fa-pencil');
        this.setStyle('btn-primary');
    }
}