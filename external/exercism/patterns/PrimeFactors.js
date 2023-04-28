/** PRIME FACTORS
 * 
 * Instructions
Compute the prime factors of a given natural number.

A prime number is only evenly divisible by itself and 1.

Note that 1 is not a prime number.

Example
What are the prime factors of 60?

Our first divisor is 2. 2 goes into 60, leaving 30.
2 goes into 30, leaving 15.
2 doesn't go cleanly into 15. So let's move on to our next divisor, 3.
3 goes cleanly into 15, leaving 5.
3 does not go cleanly into 5. The next possible factor is 4.
4 does not go cleanly into 5. The next possible factor is 5.
5 does go cleanly into 5.
We're left only with 1, so now, we're done.
Our successful divisors in that computation represent the list of prime factors of 60: 2, 2, 3, and 5.

You can check this yourself:

2 _ 2 _ 3 * 5
= 4 * 15
= 60
Success!

 * 
 */

// given: find all prime factors of a natural number input                ## challenge tweak -> find all UNIQUE prime factors, returns an array 
// - prime numbers are numbers evenly divisibly by itself and 1
// - 1 is not a prime number

// recursive modulus from 2
// - if current idx is mod 0 -> divide total by index, push idx and divisor
// - else increment idx and try again
// returns an array of factors

function primeFactors(number, factors = []) {
  if (number === 0) return Infinity;
  if (!number|| number < 0) throw new Error('please provide a positive integer argument');

  let divisor = number;
  let i = 2;

  while (i <= divisor) {
    (divisor % i === 0) ? (
      factors.push(i),
      divisor = divisor / i
    ) : i += 1
  }

  return factors;
}

// tests
// console.log(primeFactors(0)); // expect Infinity
// console.log(primeFactors(1)); // expect [null]
// console.log(primeFactors(5)); // expect [5]
// console.log(primeFactors(15)); // expect [3, 5]
// console.log(primeFactors(60)); // expect [2, 2, 3, 5]
