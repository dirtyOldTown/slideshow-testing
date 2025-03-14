import { imageSrc } from "../config/imageSrc.js";
import { leftArrow, rightArrow, startSlide } from "../config/variables.js";
import { moveSlideLeft, moveSlideRight } from "./slideHandler.js";

// Download an image from a user and add it to a slideshow sequence
function handleImage(e) {
  let reader = new FileReader();
  reader.onload = function(event) {
    let img = new Image();
    img.onload = function() {}
    img.src = event.target.result;
    imageSrc.push(img.src);

    // Enable slideshow only after downloading at least two images
    if (imageSrc.length > 1) {
      leftArrow.addEventListener("click", moveSlideLeft);
      rightArrow.addEventListener("click", moveSlideRight);
      startSlide.innerHTML = `Slideshow is enabled! <br>
      <p style="color: #333;font-weight: normal; font-size: 1.1rem;">
        Number of images: <b>${imageSrc.length}</b>
      </p>
      <p style="color: #333;font-weight: normal; font-size: 1rem; font-style: italic">
        * You can add an unlimited number of images, now or during the projection.
      </p>`;
      startSlide.classList.add("ready");
      leftArrow.style.visibility = "visible";
      rightArrow.style.visibility = "visible";
    } else {
      startSlide.classList.remove("ready");
      leftArrow.style.visibility = "hidden";
      rightArrow.style.visibility = "hidden";
    }
  }

  reader.readAsDataURL(e.target.files[0]);
}

export { handleImage }