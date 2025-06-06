const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();

const hamButton = document.querySelector('#hamburger');
const navigation = document.querySelector('#mobile-nav');
const activeLink = document.querySelectorAll('.active');

const gallery = document.querySelector('.gallery-container');
const galleryModal = document.querySelector('#gallery-fullscreen');

const contMenu = document.querySelector(".right-click-menu");
let imgData = 0;

// document.addEventListener('contextmenu', event => {
//   event.preventDefault();
//   contMenu.style.left = event.pageX + 'px';
//   contMenu.style.top = event.pageY + 'px';
//   contMenu.style.display = 'block';
// });
// document.addEventListener('click', function() {
//   contMenu.style.display = 'none';
// });

activeLink.forEach(link => {
    link.innerHTML = `🦕${link.innerHTML}`;
    link.setAttribute('color', 'inherit');
});

currentyear.innerHTML = today.getFullYear();
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

if(gallery != null){
    
    async function getGalleryData(){
        const response = await fetch("gallery-data.json");
        const data = await response.json();
        displayGallery(data.images);

        const galleryImages = document.querySelectorAll(".gallery-image");
        addModalTrigger(galleryImages, data.images);
    }

    getGalleryData();

    const displayGallery = (images) =>{
        images.forEach((image) =>{
            let card = document.createElement('section');
            let title = document.createElement('h2');
            let display = document.createElement('figure');
            let img = document.createElement('img');
            let desc = document.createElement('figcaption');
            let cost = document.createElement('p');

            title.innerHTML = `${image.name}`;
            img.src = `https://velossoraptor.github.io/wdd231/final/${image.small}`;
            img.alt = `${image.desc}`;
            // img.alt = `Oops! Image error`;
            img.classList.add("gallery-image");
            img.dataset.index = images.indexOf(image);
            img.loading = `${image.loading}`;
            desc.innerHTML = `${image.desc}`;
            cost.innerHTML = `Cost: $${image.cost} (Additional elements incur additional charges)`;

            display.appendChild(img);
            display.appendChild(desc);

            card.appendChild(title);
            card.appendChild(display);
            card.appendChild(cost);
            card.classList.add("card");

            gallery.appendChild(card);
        });
    }

    
  
    function populateModal(data){
        galleryModal.innerHTML = "";
        galleryModal.innerHTML = `
        <div>
            <button id="closeModal">X</button>
            <h2>${data.name}</h2>
            <img src="${data.large}" alt="${data.desc}">
        </div>
        `;
        galleryModal.showModal();

        closeModal.addEventListener("click", () =>{
            galleryModal.close();
        });

        galleryModal.addEventListener("click", (event) => {
            if(event.target==galleryModal){
                galleryModal.close();
            }
        });
    }

    function addModalTrigger(galleryImages, imgData){
        galleryImages.forEach((image) =>{
            image.addEventListener("click", ()=>{
                const index = image.dataset.index;
                populateModal(imgData[index]);
            });
        });
    }


}