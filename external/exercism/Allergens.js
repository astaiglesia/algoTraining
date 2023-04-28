/**
 * Given a person's allergy score, determine whether or not they're allergic to a given item, and their full list of allergies.

An allergy test produces a single numeric score which contains the information about all the allergies the person has (that they were tested for).

The list of items (and their value) that were tested are:

eggs (1)
peanuts (2)
shellfish (4)
strawberries (8)
tomatoes (16)
chocolate (32)
pollen (64)
cats (128)
So if Tom is allergic to peanuts and chocolate, he gets a score of 34.

Now, given just that score of 34, your program should be able to say:

Whether Tom is allergic to any one of those allergens listed above.
All the allergens Tom is allergic to.
Note: a given score may include allergens not listed above (i.e. allergens that score 256, 512, 1024, etc.). Your program should ignore those components of the score. For example, if the allergy score is 257, your program should only report the eggs (1) allergy.
*/

// given: allergy score: number
// - allergy items are valued as multiples of base 2
// -
// determine: if allergic to a given item + full list of allergies
// - is score a multiple of 2?

/** MK-1 */
const _ALLERGENS = {
  0: 'eggs', // 2^0
  1: 'peanuts', // 2^1
  2: 'shellfish', // 2^2
  3: 'strawberries', // 2^3
  4: 'tomatoes', // 2^4
  5: 'chocolate', // 2^5
  6: 'pollen', // 2^6
  7: 'cats', // 2^7
};

class Allergies {
  constructor(score) {
    this.score = score;
    this.allergens = this.#evaluateScore();
  }
  #evaluateScore() {
    const allergens = [];
    let score = this.score,
      itemScore;
    while (score > 0) {
      itemScore = Math.floor(Math.log2(score));
      _ALLERGENS[itemScore] && allergens.push(_ALLERGENS[itemScore]);
      score -= Math.pow(2, itemScore);
    }
    return allergens.reverse();
  }

  list() {
    // returns string[] (list of allergens)
    return this.allergens;
  }
  allergicTo(arg) {
    // returns bool (is arg in list)
    return this.allergens.includes(arg);
  }
}

const nutsShellsStraws = new Allergies(14);
const catsNPollen = new Allergies(192);

console.log(catsNPollen.list());
console.log(nutsShellsStraws.list());
console.log(nutsShellsStraws.allergicTo('shellfish')); // true
console.log(nutsShellsStraws.allergicTo('pollen')); // false
