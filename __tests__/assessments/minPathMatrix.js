// pull in the module to be tested
const { findShortestPath } = require('../../assessments/minPathMatrix.js');

describe('Minimum Path Matrix test', () => {
  const numRows = 3, 
        numColumns = 3,
        area = [[1, 0, 0],
                [1, 0, 0],
                [1, 9, 1]];
  const numRows2 = 4,
        numColumns2 = 3,
        area2 = [[1, 0, 0],
                 [1, 0, 0],
                 [0, 0, 0],
                 [1, 9, 1]];
  const numRows3 = 5, 
        numColumns3 = 6,
        area3 = [[1, 0, 0, 0, 0, 0],
                 [1, 0, 1, 1, 1, 1],
                 [1, 0, 1, 0, 0, 1],
                 [1, 0, 1, 0, 0, 1],
                 [1, 1, 1, 0, 9, 1]];
  const numRows4 = 5, 
        numColumns4 = 6,
        area4 = [[1, 0, 0, 1, 0, 0],
                 [1, 1, 1, 1, 0, 0],
                 [1, 0, 0, 1, 0, 9],
                 [1, 0, 0, 0, 0, 1],
                 [1, 1, 1, 1, 1, 1]];
  const numRows5 = 5, 
        numColumns5 = 6,
        area5 = [[1, 1, 1, 0, 0, 0],
                 [1, 0, 9, 1, 1, 0],
                 [1, 0, 1, 0, 1, 0],
                 [1, 0, 1, 0, 1, 0],
                 [1, 1, 1, 1, 1, 0]];
  const numRows6 = 5, 
        numColumns6 = 6,
        area6 = [[1, 1, 1, 0, 0, 0],
                 [1, 1, 1, 1, 1, 1],
                 [1, 1, 1, 1, 1, 0],
                 [1, 0, 1, 0, 1, 9],
                 [1, 1, 1, 1, 1, 0]];

  it('should find a direct path to 9', () => {
    expect(findShortestPath(numRows, numColumns, area)).toBe(3);
  }) 
  it('should handle no valid paths', () => {
    expect(findShortestPath(numRows2, numColumns2, area2)).toBe(-1);
  })
  it('should handle winding paths', () => {
    expect(findShortestPath(numRows3, numColumns3, area3)).toBe(16);
  })
  it('should handle dead ends', () => {
    expect(findShortestPath(numRows4, numColumns4, area4)).toBe(11);
  })
  it('should handle mutliple valid paths', () => {
    expect(findShortestPath(numRows5, numColumns5, area5)).toBe(3)
  })
  it('should handle open floor plans', () => {
    expect(findShortestPath(numRows6, numColumns6, area6)).toBe(8)
  })
})