/**         --- BUBBLE SORT ---
 * 
 *  timespace:
 *  - quadratic runtime - avg && worst cases
 *  - constant memory 
 * 
 *  approach: brute force - nested iteration
 *  - sequentially compare pairs starting from 0 to tail pointer
 *    - swap if out of order
 *    - on each pass 
 *      - larger values 'bubbles up' to the tail of the list
 *    - on the next pass, decrement the tail by 1
 *  - repeat while tail > head
 * 
 */

// mk1 - recursive
function bubbleSort(list, head = 0, tail = list.length) {
  if (head >= tail) return list

  for (let i = 0; i < tail; i++) {
    if (list[i] > list[i + 1]) {
      [list[i], list[i + 1]] = [list[i + 1], list[i]]
    }
  }

  return bubbleSort(list, head, tail - 1)
}

// mk2 - toggled iterative
// function bubbleSort(list){
//   let tail = list.length, 
//       swapped;
//   do {
//     swapped = false;
//     for (let i = 0; i < tail; i++) {
//       if (list[i] > list[i + 1]) {
//         [list[i], list[i + 1]] = [list[i + 1], list[i]];
//         swapped = true;
//       }
//     }
//     tail -= 1;
//   } while (swapped)

//   return list
// }


// mk3 - iterative
// function bubbleSort(list) {
//   let left = 0, 
//       right = list.length

//   while (right > left) {
//     for (let i = left; i < right; i++) {
//       if (list[i] > list[i + 1]) {
//         [ list[i], list[i + 1] ] = [ list[i + 1], list[i] ]
//       }
//     }
//     right -= 1;
//   }

//   return list
// }


// test cases
const tester = [4, 19, -23, 0, -154, 987, 345, 678]
const expected = [-154, -23,  0, 4, 19, 345, 678, 987]
console.log(`expect ${bubbleSort(tester)} should equal ${expected}`)

const tester2 = [678]
const expected2 = [678]
console.log(`expect ${bubbleSort(tester2)} should equal ${expected2}`)