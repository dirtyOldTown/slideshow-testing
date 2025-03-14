import { arrows, frameHeight, frameWidth, slideshowFrame } from "../config/variables.js";

// Default width and height for slide frame
let width = 400;
let height = 400;

function changeBackground() {
  document.body.style.backgroundColor = this.value;
}

function changeFrameHeight() {
  height = frameHeight.value;
  slideshowFrame.setAttribute("style", `height: ${height}px; width: ${width}px`);

  for (let arrow of arrows) {
    arrow.style.top = height / 2 - arrow.offsetHeight / 2 + "px";
  }
}

function changeFrameWidth() {
  width = frameWidth.value;
  slideshowFrame.setAttribute("style", `width: ${width}px; height: ${height}px`);
}

function refresh() {
  location.reload();
}


export { changeBackground, changeFrameHeight, changeFrameWidth, refresh }