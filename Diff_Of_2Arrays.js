// define a method takes two arrays, arr1 and arr2

// result contains elements that are found in both arrays

//loop through each array and compare their elements.

const diffArr = (arr1, arr2) => {
  const resultArr = [];

  for (let i=0; i<arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      resultArr.push(arr1[i]);
    }
  }

  for (let i=0; i<arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      resultArr.push(arr2[i]);
    }
  }
  console.log(resultArr.sort());
}
let array1 = [1,3,5]
let array2 = [1,2,4,6]
// Output = [2,3, 4, 5, 6]
diffArr(array1, array2)