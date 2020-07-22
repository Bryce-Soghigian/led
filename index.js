const LedController = require('ws2801-pi').default;
 
const amountOfLedsOnStrip = 100;
 
const ledController = new LedController(amountOfLedsOnStrip);
 
let color = {
    red: 255,
    green: 120,
    blue: 0,
  };
   
  // Set color of whole led strip
  ledController.fillLeds(color);
  ledController.show();

// async function wait(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }
 
// async function animate() {
//   let colors = [
//     {red: 255, green: 0, blue: 0},
//     {red: 0, green: 255, blue: 0},
//     {red: 0, green: 0, blue: 255},
//     {red: 255, green: 255, blue: 0},
//     {red: 255, green: 0, blue: 255},
//     {red: 0, green: 255, blue: 255},
//     {red: 0, green: 2505, blue: 0},
//   ];
 
//   for (const color of colors) {
//     for (let ledIndex = 0; ledIndex < amountOfLedsOnStrip; ledIndex++) {
//       ledController
//         .setLed(ledIndex, color)
//         .show();
 
//       await wait(30);
//     }
 
//     await wait(300);
//   }
// }
// animate();