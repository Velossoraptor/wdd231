const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();
const hamButton = document.querySelector('#hamburger');
const navigation = document.querySelector('nav');
const activeLink = document.querySelector('.active');
const memberCards = document.querySelector('.member-cards');

activeLink.innerHTML = `🦕${activeLink.innerHTML}`;

currentyear.innerHTML = today.getFullYear();
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

async function getMemberData() {
    const response = await fetch("members.json");
    const data = await response.json();
    displayMembers(data.members);
};

getMemberData();

const displayMembers = (members) => {
    members.forEach((member) =>{
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let tag = document.createElement('p');
		let logo = document.createElement('img');
        let email = document.createElement('p');
        let phone = document.createElement('p');
		let url = document.createElement('a');

        name.textContent = `${member.name}`;

        tag.textContent = `${member.tag}`;

        logo.setAttribute('src', member.imageurl);
        logo.setAttribute('alt', `The logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '150');

		email.textContent = `${member.email}`;
		phone.textContent = `${member.phone}`;

		url.setAttribute('href', `${member.url}`);
		url.textContent = `${member.name}`;

        card.appendChild(name);
        card.appendChild(tag);
        card.appendChild(logo);
        card.appendChild(email);
		card.appendChild(phone);
		card.appendChild(url);

        memberCards.appendChild(card);
    });
};