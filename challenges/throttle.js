// throttle - each activation is a prompt to call as soon as you can.

/*

Write a function that takes in a function (without parameters) and a time
interval (in ms), and returns the *throttled* version of the function.

The throttled version of the function works in the following way. Throttling
enforces a maximum number of times a function can be called over time. For example,
"execute this function at most once every 100 milliseconds."

--------------------------------------------------------------------------------

The following analogy helps in understanding throttle:

Think of a gun with a chamber for one bullet that overheats for a certain time
interval upon shooting. Imagine we attempt to put a bullet into the gun and shoot
it (this corresponds to calling the throttled function).

If the gun is not overheated, put a bullet in it and shoot it. This now puts the
gun in "overheat mode". After a period of time, the gun will become ready to
shoot (not overheated).

If the gun is overheated, the best we can do is load the gun. Then, as soon as
the gun is ready (not overheated) and has a bullet inside of it, we shoot the
gun and it overheats again.

If the gun is overheated and already loaded, we do nothing extra.

Thus, the rate at which we can shoot the gun is reduced.

--------------------------------------------------------------------------------

HINT: consider the following example. Imagine the "overheat" time interval is
1000ms, and that the throttled function is called at time t = 0ms, 10ms, 20ms.

The first call at t = 0ms shoots the gun and overheats it. The second call at
t = 10ms loads the gun. The third call at t = 20ms does nothing. Then, at
t = 1000ms the overheat period is over and so the (loaded) gun gets shot. Thus,
we have shots at t = 0ms and t = 1000ms.

Consider another example. Imagine the "overheat" time interval is 1000ms, and
that the throttled function is called at time t = 0ms, 1500ms.

The first call at t = 0ms shoots the gun and overheats it. Then, at t = 1000ms
the overheat period is over, but the gun is not loaded so it doesn't get shot.
Then the second call at t = 1500ms shoots the gun and overheats it. Thus, we
have shots at t = 0ms and t = 1500ms.

--------------------------------------------------------------------------------

HINT: make a helper sub-function that allows you to "shoot" the gun. Also see
http://demo.nimius.net/debounce_throttle/ for a visual demo of throttle and how
it differs from debounce.

Note that the practical application of throttle in real-life web development is
to lessen the rate at which a function can be repeatedly called (whether the
function be from a button click, scroll, window resize and result in API calls
or browser reflows or not etc).

*/

const throttle = (f, t) => {
  
};

module.exports = {throttle};
