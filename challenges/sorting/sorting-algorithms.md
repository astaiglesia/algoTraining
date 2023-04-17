# Sorting Algorithms
resources 
- https://www.sitepoint.com/best-sorting-algorithms/


<br>

## Types of Sorting Algorithms
- Comparison based: 
  > compare elements of the data set to determine order
  > bubbleSort, insertionSort, quickSort, mergeSort

- Non-comparison based:
  > uses properties of the data set to determine order
  > countingSort, radixSort, bucketSort

- Sort In-Place
  > don't require additional memspace to store intermediate results
  > bubbleSort, insrtionSort, quickSort, shellSort

- Stable
  > preserves the relative order of equal elements in the data set
  > insertionSort, mergeSort, TimSort

- Adaptive
  > takes advantage of any existing order in the adata set to improve efficiency
  > insertionSort, bubbleSort, TimSort



## Bubble Sort
**quadratic avg+worst runtime | constant memory**
> repeatedly compare pairs and swap if out of order
> bigger items slowly "bubble up" to the end of the list 
> (assume left to right)
- maintain a tail pointer, init at src tail
- iterate from the head to tail, swap pairs of elements if out of order
- decrement pointer
- continuously making sweeps of the array until all sorted


## Insertion Sort
**log-linear avg+worst runtime | constant memory**





## Selection Sort
**quadratic avg+worst runtime | constant memory**






## Merge Sort
**log-linear avg+worst runtime**



## Quick Sort
**log-linear avg,  quadratic worst runtime | log memory**



## Radix Sort
**(kn) runtime**