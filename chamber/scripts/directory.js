const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();

const hamButton = document.querySelector('#hamburger');
const listButton = document.querySelector('#list-toggle');

const navigation = document.querySelector('#mobile-nav');
const activeLink = document.querySelectorAll('.active');

const memberCards = document.querySelector('.member-cards');
const cardList = document.querySelectorAll('.card');

const heroImage = document.querySelector('#hero');

activeLink.forEach(link => {
    link.innerHTML = `🦕${link.innerHTML}`;
    link.setAttribute('color', 'black');
});

currentyear.innerHTML = today.getFullYear();
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

listButton.addEventListener('click', () => {
    memberCards.classList.toggle('list');
    listButton.classList.toggle('list-button');
    cardList.forEach(card => {
        card.classList.toggle('list-card');
    });
    let hasClass = listButton.classList.contains('list-button');
    if (hasClass) {
        listButton.textContent = `Photo Grid`;
    } else {
        listButton.textContent = `Simple List`;
    }
});

async function getMemberData() {
    const response = await fetch("members.json");
    const data = await response.json();
    displayMembers(data.members);
};

getMemberData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let nameDiv = document.createElement('div');
        let contentDiv = document.createElement('div');
        let textDiv = document.createElement('div');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let logo = document.createElement('img');
        let email = document.createElement('p');
        let phone = document.createElement('p');
        let url = document.createElement('a');

        nameDiv.setAttribute('id', 'card-header');
        contentDiv.setAttribute('id', 'card-content');
        textDiv.setAttribute('id', 'card-text');

        name.textContent = `${member.name}`;

        address.textContent = `${member.address}`;

        logo.setAttribute('src', member.imageurl);
        logo.setAttribute('alt', `The logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');
        logo.setAttribute('height', 'auto');

        email.innerHTML = `<b>Email:</b> ${member.email}`;
        phone.innerHTML = `<b>Phone:</b>${member.phone}`;

        url.setAttribute('href', `${member.url}`);
        url.innerHTML = `<b>Link:</b> ${member.name}`;

        nameDiv.appendChild(name);
        nameDiv.appendChild(address);

        contentDiv.appendChild(logo);
        textDiv.appendChild(email);
        textDiv.appendChild(phone);
        textDiv.appendChild(url);

        contentDiv.appendChild(textDiv);

        card.appendChild(nameDiv);
        card.appendChild(contentDiv);

        card.setAttribute('class', 'card');



        memberCards.appendChild(card);
    });
};

function handleScreenChange(){
    const sWidth = window.innerWidth;

    if(sWidth<=800){
        // console.log('small');
        heroImage.setAttribute('src', 'images/heroimage-mobile.webp');
    } else if(sWidth>800) {
        // console.log('large');
        heroImage.setAttribute('src', 'images/kingston-heroimage.webp');
    }
};

handleScreenChange();

window.addEventListener('resize', handleScreenChange);