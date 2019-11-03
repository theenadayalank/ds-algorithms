function mergeSort(inputArr = []) {
  let arrayLength = inputArr.length;

  if(arrayLength === 1) {
    return inputArr;
  }

  let mid = arrayLength / 2;
  let leftArray = inputArr.slice(0,mid);
  let rightArray = inputArr.slice(mid,arrayLength);

  return mergeArray(mergeSort(leftArray), mergeSort(rightArray));
}

function mergeArray(leftArray = [], rightArray = []) {
  let resutArray = [];
  let leftArrayIndex = 0;
  let rightArrayIndex = 0;

  while(leftArrayIndex < leftArray.length && rightArrayIndex < rightArray.length) {
    if(leftArray[leftArrayIndex] <= rightArray[rightArrayIndex]) {
      resutArray.push(leftArray[leftArrayIndex]);
      leftArrayIndex++;
    } else {
      resutArray.push(rightArray[rightArrayIndex]);
      rightArrayIndex++;
    }
  }

  resutArray = resutArray
                .concat(leftArray.slice(leftArrayIndex))
                .concat(rightArray.slice(rightArrayIndex));

  return resutArray;
}

const inputArr = [2,4,6,4,5,1];

console.log(mergeSort(inputArr));