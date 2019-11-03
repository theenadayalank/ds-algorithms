function partition(inputArr = [], low, high) {
  let pivot = inputArr[high];

  
}

function quickSort(inputArr = [], low, high) {
  if(low<high) {
    let pi = partition(inputArr,low,high);
    quickSort(inputArr,low,pi);
    quickSort(inputArr,pi+1, high);
  }
}

const inputArr = [2,4,6,4,5,1];

console.log(quickSort(inputArr, 0, inputArr.length - 1));