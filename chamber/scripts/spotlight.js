// TODO: 
// Sort members based on member level
// Randomize 3 chosen members
// Display

const spotlightCards = document.querySelector('.spotlight-cards');

async function getMemberData() {
    const response = await fetch("members.json");
    const data = await response.json();
    // displaySortedMembers(data.members);
};

getMemberData();

    const displaySortedMembers = (members) => {
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