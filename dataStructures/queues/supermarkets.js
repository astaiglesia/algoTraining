/*   --- SUPERMARKET QUEUE ---
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.



input:
- customers: nums [], where each value represents the time a customer needs to check out
- n: num
output:
- num representing total time required to 
givens:
- only 1 queue serving all tills
- order of queue never changes
- front person proceeds to a till as soon as it becomes free
  - i.e. no optimization | queue mgmt allowed... it is what it is
approach:
- calculate the total time required for all customers to check out
- create checkouts array
- first pass to push a shifted a value to each subarray up to n
- while items in queue
  - increment the index of the min value of checkouts
- return max value of checkouts
*/ 
// mk2
function queueTime(customers, n) {
  const checkouts = customers.splice(0, n);

  customers.forEach(customer => {
    const nextOpen = Math.min(...checkouts),
          nextIdx = checkouts.findIndex(ele => ele === nextOpen);
    checkouts[nextIdx] += customer;
  })

  return checkouts.length ? Math.max(...checkouts) : 0
}

// mk1 - handle as a queue
// function queueTime(customers, n) {
//   const checkouts = [];
//   for(let i = 0; i < n; i++) {
//     checkouts.push(customers.shift());
//     if(!customers.length) break;
//   }
  
//   while(customers.length) {
//     const nextOpen = Math.min(...checkouts),
//           nextIdx = checkouts.findIndex(ele => ele === nextOpen);
//     checkouts[nextIdx] += customers.shift();
//   }
  
//   return Math.max(...checkouts) || 0
// }


// testcases
// console.log(`expect ${queueTime([5,3,4], 1)} to be 12`)
// T1 = [5, 3, 4] = 12

// console.log(`expect ${queueTime([10,2,3,3], 2)} to be 10`)
// T1 = [10 ] = 10 
// T2 = [2, 3, 3] = 8

// console.log(`expect ${queueTime([2, 3, 10], 2)} to be 12`)
// T1 = [2, 10] = 12
// T2 = [3] = 3

// console.log(`expect ${queueTime([5, 3, 4, 10, 2, 3, 6, 3, 8, 3], 4)} to be 15`)
// T1 = 11
// T2 = 3
// T3 = 15
// T4 = 10


