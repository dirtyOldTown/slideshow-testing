import { arrows, imageLoader } from "./config/variables.js";
import { frameWidth, frameHeight, colorPicker, resetBtn } from "./config/variables.js";
import { slideControll } from "./controllers/slideControll.js";
import { changeBackground, changeFrameHeight, changeFrameWidth, refresh } from "./controllers/settings.js";

// Starting a slideshow
imageLoader.addEventListener('change', slideControll);

// Settings
colorPicker.addEventListener("input", changeBackground);
frameHeight.addEventListener("change", changeFrameHeight);
frameWidth.addEventListener("change", changeFrameWidth);

// Reset settings
resetBtn.addEventListener("click", refresh);

// Set default position for slideshow arrows
for (let arrow of arrows) {
  arrow.style.top = 200 - arrow.offsetHeight / 2 + "px";
}





