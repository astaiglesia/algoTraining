/*              --- SHELL SORT ---

Shell sort uses an insertionSort algo but instead of sorting the entire list at once... 

the list is divided into smaller sublists
- sublists are sorted using inesertion sort
- reducing the number of exchanges needed to sort the list

works by:
- defining a sequence of integers called the increment sequence
  - determines the size of the sublists to be independently sorted
  - most commonly used :

    0 the Knuth sequence, where:
      - h is interval defaulted to 1
      - n is the length of the list

      h = 1
      while (h < n) {
        h = 3*h + 1
      }

      // 1 > 4 > 13 > 

algoritm stops when the increment size is 1 (at which point its equivalent to a standard insertion sort algo)

*/

function shellSort(items) {
  let sublistLength = Math.floor(items.length / 2);                // determines the increment sequence?

  while (sublistLength > 0) {                                      // outer loop populates sublists of length sublistLength
                                                                  // - loop reduces sublistLength on each pass by the increment sequenceer
   
    for (let start = 0; start < sublistLength; start++) {          // inner loop iterates from 0 to increment sequence (sublistLength)

      gapInsertionSort(items, start, sublistLength);               // does something, passing in current idx and sublistLength
    }
   
    sublistLength = Math.floor(sublistLength / 2);                  // sublistLength is reassigned to half its value - next sublist will be half the size
  }

  return items;
}

function gapInsertionSort(items, start, gap) {                            // accepts source array, current index of innerloop sublist, length of sublist

  for (let i = start + gap; i < items.length; i += gap) {                 // outer loop init at current position in the source array, increments at current sublist length while within bounds of dataset
    let currentValue = items[i];                                          // accesses value at current position
    let position = i;                                                     // - stores index for that position
  
    while (position >= gap && items[position - gap] > currentValue) {     // inner loop backwards checks positions at gap incerements while the previous position is greater than the current value
      items[position] = items[position - gap];
      position = position - gap;
    }

    items[position] = currentValue;                                       // outer loop reassigns that position to the currentValue
  }
}

let items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53];
console.log(shellSort(items));