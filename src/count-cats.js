module.exports = function countCats(matrix) {
  const result = matrix.reduce((acc, item) => {
    acc += item.filter(elem => elem === '^^').length;
    return acc;
  }, 0);

  return result;
};
