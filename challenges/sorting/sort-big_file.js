/** Sort Big File
 * 
 * Imagine you have a 20 GB file with one string per line.
 * Explain how you would sort this file.
 * 
 * https://applied-math-coding.medium.com/how-to-sort-a-20g-file-in-javascript-7bbba19229a9
 * 
 * 
 * assume:
 * line of text = 70 bytes
 * 20GB = 285 trillion lines
 * 
 * approach:
 * - if OSmemspace < 20GB (dataset does not fit in memory)
 * > read the list in manageable chunks
 *  - each portion is sorted and assigned to memory
 * > put a readable stream onto each of the files
 *  - merge:
 *    - pick the smallest element 
 *      - write to large outcome file
 * 
 */

function sortBig(bigFile) {

}

// testdata
// generator function
function* logistic(x: number): Generator<string> {
  let readBytes = 0;
  let lastLog = 0;
  while (readBytes < FILE_SIZE) {
    x = 3.7 * x * (1.0 - x);
    const data = `${x}\n`;
    readBytes += data.length;   
    yield data;
  }
}
