'use strict';

class NQueens {
    constructor() {
        this._positions = [];
        this.oneSolution = this.oneSolution.bind(this);
        this.oneSolutionUtil = this.oneSolutionUtil.bind(this);
        this.allSolutions = this.allSolutions.bind(this);
        this.allSolutionsUtil = this.allSolutionsUtil.bind(this);
    }
    get positions() {
        return this._positions;
    }
    set positions(positions) {
        this._positions = positions;
    }
    oneSolution(n) {
        let hasSolution = this.oneSolutionUtil(n, 0, this._positions);
        return this._positions;
    }
    oneSolutionUtil(n, row, positions) {
        if (n === row)
            return true;
        for (let column = 0; column < n; column++) {
            let isSafe = true;
            for (let queen = 0; queen < row; queen++) {
                if (positions[queen].y === column
                  || positions[queen].x - positions[queen].y === row - column
                  || positions[queen].x + positions[queen].y === row + column) {

                    isSafe = false;
                    break;
                }
            }
            if (isSafe) {
                positions[row] = new Coordinate(row, column);
                if (this.oneSolutionUtil(n, row + 1, positions)) {
                    return true;
                }
            }
        }
        return false;
    }
    allSolutions(n) {
        let result = []
        this.allSolutionsUtil(0, this._positions, result, n);
        return result;
    }
    allSolutionsUtil(current, positions, result, n) {
        if (n === current) {
            let buffer = [];
            let oneResult = [];

            positions.map((pos, i) => {
                for (let j = 0; j < n; j++) {
                    if (pos.y === j) {
                        buffer.push('👑 ');
                    } else {
                        if (i % 2) {
                            buffer.push((j % 2)
                                ? '⬜ '
                                : '⬛ ');
                        } else {
                            buffer.push((j % 2)
                                ? '⬛ '
                                : '⬜ ')
                        }
                    }
                }
                oneResult.push(buffer.join(''));
                buffer = [];
            });
            result.push(oneResult);
            return;
        }
        for (let i = 0; i < n; i++) {
            let isSafe = true;
            for (let j = 0; j < current; j++) {
                if (positions[j].y === i
                  || positions[j].y - positions[j].x === i - current
                  || positions[j].y + positions[j].x === i + current) {
                    isSafe = false;
                    break;
                }
            }
            if (isSafe) {
                positions[current] = new Coordinate(current, i);
                this.allSolutionsUtil(current + 1, positions, result, n);
            }
        }
    }
}
