/***** KILLER GARAGE DOOR
 * Situation
You have been hired by a company making electric garage doors. Accidents with the present product line have resulted in numerous damaged cars, broken limbs and several killed pets. Your mission is to write a safer version of their controller software.

Specification
We always start with a closed door. The remote control has exactly one button, with the following behaviour.

If the door is closed, a push starts opening the door, and vice-versa
It takes 5 seconds for the door to open or close completely
While the door is moving, one push pauses movement, another push resumes movement in the same direction
In order to make the door safer, it has been equiped with resistance-based obstacle detection. When the door detects an obstacle, it must immediately reverse the direction of movement.

Input
A string where each character represents one second, with the following possible values.

'.' No event
'P' Button has been pressed
'O' Obstacle has been detected (supersedes P)
As an example, '..P....' means that nothing happens for two seconds, then the button is pressed, then no further events.

Output
A string where each character represents one second and indicates the position of the door (0 if fully closed and 5 fully open). The door starts moving immediately, hence its position changes at the same second as the event.

Example
..P...O..... as input should yield 001234321000 as output


 */ 

/*
input: events: string
output: string
givens: 
- output is a numerical representation of the input's actions
- door state initialized as closed
- door trigger aims to reverse door state with a 5 second transition time
- if trigger occurs during transition, transition pauses
- if trigger occurs during pause, transition continues
- if obstacle occurs during transition, direction reverses

approach: iteration
- parse the input and convert to numeric chars
- conditionals to handle each input case and convert to output format

edges: 
- invalid inputs 
- 

timespace: linear time

example: 
. . P . . . O . . . . . as input should yield 
0 0 1 2 3 4 3 2 1 0 0 0 as output

*/

function door(events) {
  console.log('================= new call', events)
  let output = ''
  const doorState = {
    isOpen: false,
    inMotion: false,
    transitionCount: 0,
    isOpening: true
  }
  
  let { isOpen, inMotion, transitionCount, isOpening } = doorState
  
  for (const char of events) {
    console.log('new step', char, transitionCount, 'in motion:', inMotion, '| going up?', isOpening)
    if (char === 'P' ) {
      !inMotion && (isOpening ? transitionCount += 1 : transitionCount -= 1)
      inMotion = !inMotion
      output = `${output}${transitionCount}`
      continue
    }
    
    
    if (char === '.' && !inMotion) {
      output = `${output}${transitionCount}`
      continue
    }
    if (char === '.' && inMotion) {
      console.log('hit')
      isOpening ? transitionCount += 1 : transitionCount -= 1
      
      output = `${output}${transitionCount}`
  
      console.log('terminate motion', inMotion, isOpening, transitionCount)
      if (transitionCount <= 1 ) {
        inMotion = false
        isOpening = !isOpening
        if (transitionCount === 1) transitionCount -= 1
      }
      if (transitionCount === 5) {
        inMotion = false
        isOpening = !isOpening
      }
      continue
    } 
    if (char === 'O' && inMotion) {
      isOpening = !isOpening
      isOpening ? transitionCount += 1 : transitionCount -= 1
      output = `${output}${transitionCount}`
      
      if (transitionCount === 1 || transitionCount === 5) {
        inMotion = !inMotion
        isOpening = !isOpening
        if (transitionCount === 1) transitionCount -= 1
      }
      continue
    } 

    console.log('added current char ----', char, 'to new output:', output)
  }
  
  
  console.log('----- final output', output)
  return output
}

module.exports = { door }
