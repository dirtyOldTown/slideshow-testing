import { imageStyleEditing } from "../middleware/imageStyleEdting.js";
import { imageContainer } from "../config/variables.js";
import { imageSrc } from "../config/imageSrc.js";

// Default paramaters
let framePosition = 0;
let i = 0;
let imagePosition = 0;

function moveSlideLeft() {
  framePosition += 100;
  imageContainer.style.left = framePosition + "%";

  i--;
  if (i < 0) i = imageSrc.length - 1;
  let img = document.createElement("img");
  imagePosition -= 100;

  imageContainer.insertAdjacentElement("beforeend", img);
  imageStyleEditing(img, i, imagePosition, imageSrc);
}

function moveSlideRight() {
    framePosition -= 100;
    imageContainer.style.left = framePosition + "%";
  
    i++;
    if (i > imageSrc.length - 1) i = 0;
    let img = document.createElement("img");
    imagePosition += 100;

    imageContainer.append(img);
    imageStyleEditing(img, i, imagePosition, imageSrc);
  }
  
export { moveSlideLeft, moveSlideRight }