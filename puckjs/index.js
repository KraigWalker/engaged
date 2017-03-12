console.log('Battery level currently: ' + Puck.getBatteryPercentage() + '%');

// Hello World! Let's initialize initial variables here.

// If magenetometer is enabled, zero the Magnetometer

// On button push, we want turn the LED on Green initially
// (Ready Mode)

// IF we're using the Door magnet.

// if magnet is near.
// This means the door is already closed, so we wait till the door is open.

// the button is "primed" (blinking Green)

// listen for the magnet to move away

// When magnet is moved away

// the button is still "primed" (blinking Green)

// When it shuts again (magnet near) we'll change to being "engaged" (solid Red)

// When the door opens again, move to ready (solid Green) for 2 minutes.

// Be available for priming during this time as normal...

// the cycle continues...

// ELSE

// On Button Press
// -- turn the button Red for 5 minutes
var count = 0;
var watchID;

function engagedMode() {
  // RED LED1

  // listen for a button push to disengage

}

function disengagedMode() {
  // GREEN LED for 2 Minutes
   digitalWrite(LED1, true);
  setTimeout(function () {
   digitalWrite(LED1, false);
  }, 120000);
  // Listen for a press (to re-engage)
}

watchID = setWatch(function() {
  disengagedMode();
  clearWatch(watchID);
}, BTN, {edge:"rising", debounce:50, repeat:true});

console.log("Watch ID: " + watchID);

// during this time, if the button is pressed again, turn the light 
