'use strict';

class Board {
    constructor(n, positionsArray) {
        this.container = document.querySelector('.n-queens__wrapper');
        this._size = n;
        this._coords = positionsArray;
        this.paint = this.paint.bind(this);
    }
    get size() {
        return this._size;
    }
    set size(n) {
        this._size = n;
    }
    get coords() {
        return this._coords;
    }
    set coords(coordinates) {
        this._coords = coordinates;
    }
    paint() {
        this.container.innerHTML = ``;
        for (let i = 0, row = ''; i < this._size; i++, row = '') {
            for (let j = 0; j < this._size; j++) {
                if (this._coords[i].x === i && this._coords[i].y === j) {
                    row += '👑 ';
                } else {
                    row += '_ ';
                }
            }
            this.container.innerHTML += `<p>${row}</p>`;
        }
    }
}
