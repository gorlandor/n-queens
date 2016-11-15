(function(window, document) {
    'use strict';
    // setup the dom refs
    const form = document.querySelector('form');
    const input = document.querySelector('input');
    const checkbox = document.querySelector('input[type=checkbox]');
    const container = document.querySelector('.n-queens__wrapper');
    const modal = document.querySelector('.modal');
    const closeButton = document.querySelector('.btn-close');
    const timeToSolve = document.querySelector('.time--solve');
    const timeToPaint = document.querySelector('.time--paint');

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
        if ((n === 2 || n === 3) || (n > 8 && checkbox.checked)) {
            modal.style.visibility = 'visible';
            return;
        }

        // instanciate a NQueens Problem
        let nQueensProblem = new NQueens();

        // begins timer
        let start_time = window.performance.now();
        let solve_time;
        if (checkbox.checked) {
            // scan for all solution
            let positionsArray = nQueensProblem.allSolutions(n);
            solve_time = window.performance.now();
            // prepare Board for paint
            let board = new Board(n, positionsArray);
            board.paint(n);
        } else {
            // scan for one solution
            let positionsArray = nQueensProblem.oneSolution(n);
            solve_time = window.performance.now();
            // prepare Board for paint
            let board = new Board(n, positionsArray);
            board.paint();
        }

        // stops timer
        let end_time = window.performance.now();

        // calculate and output the computation's duration in ms
        timeToSolve.innerHTML = `${solve_time - start_time} ms`;
        timeToPaint.innerHTML = `${end_time - start_time} ms`;
    };
    form.addEventListener('submit', onSubmit);
})(window, document);
