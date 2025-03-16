import { imageSrc } from "../config/imageSrc.js";
import { leftArrow, rightArrow, startSlide, numberOfImages } from "../config/variables.js";
import { moveSlideLeft, moveSlideRight } from "./moveSlide.js";
import { replaceHtml } from "../middleware/replaceHtml.js";

// Download an image from a user and add it to a slideshow sequence
function slideController(e) {
  let reader = new FileReader();
  reader.onload = function(event) {
    let img = new Image();
    img.src = event.target.result;
    if (!imageSrc.includes(img.src)) {
      imageSrc.push(img.src);
      numberOfImages.textContent = " " + imageSrc.length;
    } 
    // Enable slideshow only after downloading at least two images
    if (imageSrc.length > 1) {
      replaceHtml(imageSrc, startSlide);
      startSlide.classList.add("ready");
      leftArrow.style.visibility = "visible";
      rightArrow.style.visibility = "visible";

      leftArrow.addEventListener("click", moveSlideLeft);
      rightArrow.addEventListener("click", moveSlideRight);

    } else {
      startSlide.classList.remove("ready");
      leftArrow.style.visibility = "hidden";
      rightArrow.style.visibility = "hidden";
    }
  }

  reader.readAsDataURL(e.target.files[0]);
}

export { slideController }