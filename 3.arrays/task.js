function compareArrays(arr1, arr2) {
  let result;

  result = (arr1.length === arr2.length) && (arr1.every(function(item, index) {
    return item === arr2[index];
  }));

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter(function(item){
    return item > 0;
  }).filter(function(item){
    return item%3 === 0;
  }).map(function(item){
    return item * 10;
  });

  return resultArr; // array
}
