export default class Boton {
    constructor(callback) {
        this.boton = document.createElement('button');
        this.boton.classList.add('btn', 'btn-sm');

        this.boton.onclick = callback;
    }

    setIcon(icon) {
        this.boton.innerHTML = `<i class="${icon}"></i>`;
    }

    setStyle(style) {
        this.boton.classList.add(style);
    }

    getElement() {
        return this.boton;
    }
}