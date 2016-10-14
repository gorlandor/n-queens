(function(window, document) {
  'use strict';

  const form = document.querySelector('form');
  const input = document.querySelector('input');
  const container = document.querySelector('.n-queens__wrapper');
  const modal = document.querySelector('.modal');
  const closeButton = document.querySelector('.btn-close');
  closeButton.onclick = () => modal.style.visibility = 'hidden';
  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.visibility = 'hidden';
    }
  };
  let onSubmit = (event) => {
    event.preventDefault();
    let n = Number(input.value);
    if (n === 2 || n === 3) {
      modal.style.visibility = 'visible';
      return;
    }
    container.innerHTML = `<p>processing</p>`;
        // instanciate a NQueens Problem
        let nQueensProblem = new NQueens();

        // scan for a solution
        let positionsArray = nQueensProblem.oneSolution(n);

        // prepare Board for paint
        let board = new Board(n, positionsArray);
        board.paint();

      };
      form.addEventListener('submit', onSubmit);
    })(window, document);
