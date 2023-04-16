# Sorting Algorithms


## Bubble Sort
**quadratic avg+worst runtime | constant memory**
> repeatedly compare pairs and swap if out of order
> bigger items slowly "bubble up" to the end of the list 
> (assume left to right)
- maintain a tail pointer, init at src tail
- iterate from the head to tail, swap pairs of elements if out of order
- decrement pointer
- continuously making sweeps of the array until all sorted

const tester = [4, 19, -23, 0, -154, 987, 345, 678]
const expected = [-154, -23,  0, 4, 19, 345, 678, 987]

### iterative:
const bubbleSort_iterative = arrOfNums => {
  let right = arrOfNums.length - 1,
      left = 0

  // for loop
  for (let i = 0; i < arrOfNums.length - 1; i++) {
    while (right > left) {
      if (arrOfNums[left] > arrOfNums[left + 1]) {
        [ arrofNums[left], arrOfNums[left + 1] ] = [ arrofNums[left + 1], arrOfNums[left] ]
      }
      left += 1;
    }
    right -= 1;
  }

  return arrOfNums
}  

### recursive:
const bubbleSort_recursive = (arrOfNums) => {

}

## Selection Sort
**quadratic avg+worst runtime | constant memory**



## Merge Sort
**log-linear avg+worst runtime | constant memory**



## Merge Sort
**log-linear avg+worst runtime**



## Quick Sort
**log-linear avg,  quadratic worst runtime | log memory**



## Radix Sort
**(kn) runtime**