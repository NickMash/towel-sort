
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) {
        return []
    } else {
        for (let i = 1; i < matrix.length; i = i + 2) {
            matrix[i].reverse();
        }
        return [].concat(...matrix);
    }
};
