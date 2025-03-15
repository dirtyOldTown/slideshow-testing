import { imageSrc } from "../config/imageSrc.js";
import { leftArrow, rightArrow, startSlide } from "../config/variables.js";
import { moveSlideLeft, moveSlideRight } from "./moveSlide.js";

// Download an image from a user and add it to a slideshow sequence

function slideControll(e) {
  let reader = new FileReader();
  reader.onload = function(event) {
    let img = new Image();
    img.src = event.target.result;
    imageSrc.push(img.src);

    // Enable slideshow only after downloading at least two images
    if (imageSrc.length > 1) {
      startSlide.innerHTML = `
      <div>
        <p>Slideshow is enabled!</p>
        <p style="color: #333;font-weight: normal; font-size: 1.1rem">
        <b>Number of images: ${imageSrc.length}</b></p>
        <p style="color: #222;font-weight: normal; font-size: 0.9rem">
          <em>* You can add an unlimited number of images, now or during the projection.</em>
        </p>
      </div>`;

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

export { slideControll }