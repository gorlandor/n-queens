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
    paint(solutions = 1) {
        this.container.innerHTML = ``;
        if(solutions === 1){
          for (let i = 0, row = ''; i < this._size; i++, row = '') {
              for (let j = 0; j < this._size; j++) {
                  if (i % 2) {
                      if (this._coords[i].x === i && this._coords[i].y === j) {
                          row += '👑 ';
                      } else {
                          row += (j % 2) ? '⬜ ' : '⬛ ';
                      }
                  } else {
                      if (this._coords[i].x === i && this._coords[i].y === j) {
                          row += '👑 ';
                      } else {
                          row += (j % 2) ? '⬛ ' : '⬜ ';
                      }
                  }
              }
              this.container.innerHTML += `<p class="no-margin">${row}</p>`;
          }
        }
        else{
          console.log(this._coords);
          this._coords.map((sol) => {
            sol.map((row) => {
              this.container.innerHTML += `<p class="no-margin">${row}</p>`;
            });
            this.container.innerHTML += `<br>`;
          });
        }
    }
}
