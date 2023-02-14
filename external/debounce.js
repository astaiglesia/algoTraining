/**
 create a function debounce that executes a function after mouse move has stopped for a delayed amount of time

 input: callback: function, delay = number (time in ms)
 output: void?
 givens: 
 - debouncing a function creates a closure that wraps a function with a timer/setTimeout
  - allows for time controlled firing of event handlers

 ## mutliple debounce approaches for diff event types
 // click events - ignore subsequent events after initial trigger
 // onchange events - ignore all changes until changes are complete
 // - sets/resets a timeout timer on changes, callback only runs when the timer completes

 approach:
  - create a callback to occur on mousemove events
  - create debounce function that executes after the mouse has stopped moving for a spec'd amount of time
    - set up a timer
      - if timer exists, clear existing
      - set a timeout that invokes the callback after the delay
    
vs. Throttling - rate limiting function calls
- manage all steps in the process at a controlled rate
- subsequent fires can only occur after a specified interval of time from the time of initial trigger
// e.g. autocomplete when user is done typing (debounce) vs requesting API content based off of scroll offsets

testing
- (with DOM) set up an event handler and eventlistener (use document or query an element)
- (simulate mouse motion with a loop) 
  - fire mouse move handler at each step of a loop
  - debounced function should only fire after spec'd delay from end of loop


 edges:
 - invalid inputs

 timespace:
 - constant time / space (complexity constrained by the callback)
 */


const doOnMouseMove = () => {
  // should only log once
  console.log('mouse has stopped moving for 2 seconds');
}

const debounce = (callback, delay) => {
 let timer;
 
 return (...args) => {
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => callback(...args), delay);
 }
}


// ----- testcase
let testTime = 2000;
const mouseMoveHandler = debounce(doOnMouseMove, testTime);

// fires at every step, simulating firing on each mouse movement
let i = 0;
while (i < 900000) {
  if (i = 899999) console.log('loop complete!! next console.log in 2 seconds');
  mouseMoveHandler();
  i++;
}
// ---- DOM testcase
// document.addEventListener('mousemove', mouseMoveHandler);

