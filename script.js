
let leftContainer = document.querySelector('.left-container');
let rightContainer = document.querySelector('.right-container');

fetch('https://picsum.photos/v2/list')
  .then(response => response.json())
  .then((data) => {
    data.forEach((picture, index) => {
      let picturePreview = document.createElement("div");
      picturePreview.className = "picture-preview";
      picturePreview.setAttribute('id', index);
      picturePreview.innerHTML = `
    <img src="${picture.download_url}" alt="car photo" height="200" width="200">
    `;
      leftContainer.appendChild(picturePreview);

      let pictureView = document.createElement("div");
      pictureView.className = "picture-view";


      document.querySelector('.left-container').addEventListener('click', (e) => {
        e.preventDefault();
        pictureView.innerHTML = ``;
        if (index == e.target.parentElement.getAttribute('id')) {
          
          pictureView.innerHTML = `
        <img src="${picture.download_url}" class="image" alt="photo" height="" width="">
        <div class ="photo-details">
          <p>Author: ${picture.author} </p>
          <p>Width: ${picture.width} </p>
          <p>Height: ${picture.height} </p>
        </div>
        `;
          rightContainer.appendChild(pictureView);
        }
      });
    })
  })

  

  .catch(err => console.log(err));











