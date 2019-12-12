"use strict";

let leftContainer = document.querySelector(".left-container");
let rightContainer = document.querySelector(".right-container");

fetch("https://picsum.photos/v2/list")
  .then(response => response.json())
  .then((data) => {
    render(data)
  })

  .catch(err => console.log(err));

/**
  * render() renders preview images to the .left-container
  * if container index is matching data object index when preview image is clicked
  * then preview image is printed to the .right-container
  * @param data (pictures fetched from the given url)
  */
function render(data) {
  data.forEach((picture, index) => {
    // start rendering preview images
    let picturePreview = document.createElement("div");
    picturePreview.className = "picture-preview";
    picturePreview.setAttribute("id", index);
    picturePreview.innerHTML = `
    <img src="${picture.download_url}" alt="photo" class="preview-image">
    `;
    leftContainer.appendChild(picturePreview);

    // start rendering view image
    let pictureView = document.createElement("div");
    pictureView.className = "picture-view";
    document.querySelector(".left-container").addEventListener("click", (e) => {
      e.preventDefault();
      pictureView.innerHTML = ``;
      // checking if container index is matching array index when preview image is clicked
      if (index == e.target.parentElement.getAttribute("id")) {
        pictureView.innerHTML = `
        <div class="view-image-container">
          <img src="${picture.download_url}" class="view-image" alt="photo">
        </div>
        <div class ="photo-details">
          <p>Author: ${picture.author} </p>
          <p>Width: ${picture.width} px </p>
          <p>Height: ${picture.height} px </p>
        </div>
        `;
        rightContainer.appendChild(pictureView);
      }
    });
  })
}

















