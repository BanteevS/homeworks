function solveEquation(a, b, c) {
  let arr;
  "use strict";
  let d = Math.pow(b,2) - (4 * a * c);
    if (d < 0) {
        arr = [];
    } else if (d === 0) {
        arr = [-(b/(2*a))]
    } else {
        let x1 = (-b + Math.sqrt(d)) / (2*a);
        let x2 = (-b - Math.sqrt(d)) / (2*a);
        arr = [x1, x2];
    }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
