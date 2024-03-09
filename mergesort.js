function merge(leftSide, rightSide) {
  let sorted = [];

  while (leftSide.length && rightSide.length) {
    if (leftSide[0] < rightSide[0]) {
      sorted.push(leftSide.shift());
    } else {
      sorted.push(rightSide.shift());
    }
  }

  return sorted.concat(leftSide.slice().concat(rightSide.slice()));
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const midpoint = Math.floor(array.length / 2);
    const leftSide = array.slice(0, midpoint);
    const rightSide = array.slice(midpoint);

    return merge(mergeSort(leftSide), mergeSort(rightSide));
  }
}

const array = [3, 2, 1, 13, 8, 5, 0, 1];

const sortedArray = mergeSort(array);
console.log("sorted array: " + sortedArray);
