import { arrows, imageLoader } from "./config/variables.js";
import { frameWidth, frameHeight, resetBtn } from "./config/variables.js";
import { slideController } from "./controllers/slideController.js";
import { changeFrameHeight, changeFrameWidth, refresh } from "./controllers/settings.js";

// Starting a slideshow
imageLoader.addEventListener('change', slideController);

// Settings
frameHeight.addEventListener("change", changeFrameHeight);
frameWidth.addEventListener("change", changeFrameWidth);

// Reset settings
resetBtn.addEventListener("click", refresh);

// Set default position for slideshow arrows
for (let arrow of arrows) {
  arrow.style.top = 200 - arrow.offsetHeight / 2 + "px";
}





