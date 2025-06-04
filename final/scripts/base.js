const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();

const hamButton = document.querySelector('#hamburger');
const navigation = document.querySelector('#mobile-nav');
const activeLink = document.querySelectorAll('.active');

const gallery = document.querySelector('.gallery-container');

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
            img.src = `${image.small}`;
            img.alt = `Oops! Image error`;
            desc.innerHTML = `${image.desc}`;
            cost.innerHTML = `Cost: $${image.cost} (Additional elements incur additional charges)`;

            display.appendChild(img);
            display.appendChild(desc);

            card.appendChild(title);
            card.appendChild(display);
            card.appendChild(cost);

            gallery.appendChild(card);
        });
    }

}