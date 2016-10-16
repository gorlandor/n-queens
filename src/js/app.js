(function(window, document) {
    'use strict';
    // setup the dom refs
    const form = document.querySelector('form');
    const input = document.querySelector('input');
    const container = document.querySelector('.n-queens__wrapper');
    const modal = document.querySelector('.modal');
    const closeButton = document.querySelector('.btn-close');
    const time = document.querySelector('.time');

    // setup event listeners
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

        // begins timer
        let start_time = window.performance.now();

        // scan for a solution
        let positionsArray = nQueensProblem.oneSolution(n);

        // prepare Board for paint
        let board = new Board(n, positionsArray);
        board.paint();

        // stops timer
        let end_time = window.performance.now();

        // calculate and output the computation's duration in ms
        let duration = end_time - start_time;
        time.innerHTML = `${duration} ms`;

    };
    form.addEventListener('submit', onSubmit);
})(window, document);
