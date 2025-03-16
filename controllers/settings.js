import { arrows, frameHeight, frameWidth, slideshowFrame, image } from "../config/variables.js";

// Default width and height for slide frame
let width = 400;
let height = 400;

function changeFrameHeight() {
  height = frameHeight.value;
  slideshowFrame.setAttribute("style", `height: ${height}px; width: ${width}px`);
  image.setAttribute("style", `width: ${width}px; height: ${height}px`);
  
  // Adjust arrows absolute position
  for (let arrow of arrows) {
    arrow.style.top = height / 2 - arrow.offsetHeight / 2 + "px";
  }
}

function changeFrameWidth() {
  width = frameWidth.value;
  slideshowFrame.setAttribute("style", `width: ${width}px; height: ${height}px`);
  image.setAttribute("style", `width: ${width}px; height: ${height}px`);
}

function refresh() {
  location.reload();
}

export { changeFrameHeight, changeFrameWidth, refresh }