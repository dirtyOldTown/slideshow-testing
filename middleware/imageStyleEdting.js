// Editing the image after it has been downloaded by the user
function imageStyleEditing(img, i, imagePosition, imageSrc) {
    img.src = imageSrc[i];
    img.style.position = "absolute";
    img.style.left = imagePosition + "%";
  }

export { imageStyleEditing }
  