function replaceHtml(imageSrc, startSlide) {
  startSlide.innerHTML = `
  <div>
    <p>Slideshow is enabled!</p>
    <p style="color: #333; font-weight: normal; font-size: 1.1rem">
    <b>Number of images: ${imageSrc.length}</b></p>
    <p style="color: #222; font-weight: normal; font-size: 0.9rem">
      <em>* You can upload an unlimited number of images, 
      now or during the projection (duplicates are ignored).</em>
    </p>
  </div>`;
}

export { replaceHtml }