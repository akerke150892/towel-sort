
// You should implement your task here.

module.exports = function towelSort (matrix) {
  lst = [];
  if (!matrix || matrix.length == 0) return lst;
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      matrix[i].sort((a, b) => a - b);
      matrix[i].forEach(elem => { lst.push(elem)       
      });
    } else {
      matrix[i].sort((a, b) => b - a);
      matrix[i].forEach(elem => { lst.push(elem) 
      });      
    }
  }
  return lst;
}
