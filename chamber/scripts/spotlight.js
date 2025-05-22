// TODO: 
// Sort members based on member level
// Randomize 3 chosen members
// Display

const spotlightCards = document.querySelector('.spotlight-cards');

async function getSortedMemberData() {
    const response = await fetch("members.json");
    const data = await response.json();
    const sortedMembers = data.members.filter(member => member.level > 1);
    const spotlights = new Set();
    // console.log(typeof sortedMembers);
    while (spotlights.size < 3){
        let index = Math.floor(Math.random()*(Object.keys(sortedMembers).length-1));
        spotlights.add(sortedMembers[index]);
        console.log(sortedMembers[index]);
    }
    console.log(spotlights);
    displaySortedMembers(spotlights);
    // displaySortedMembers(data.members.filter(member => member.level > 1));
};

getSortedMemberData();

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
        let level = document.createElement('p');

        if(member.level == 2){
            level.textContent = `Silver Membership`;
            level.style.backgroundColor ='#404c5e';
        }else if(member.level ==3){
            level.textContent = `Gold Membership`;
            level.style.backgroundColor ='#5c4815';
        }

        level.style.color ='#ffffff';

        nameDiv.setAttribute('id', 'card-header');
        contentDiv.setAttribute('id', 'card-content');
        textDiv.setAttribute('id', 'card-text');

        name.textContent = `${member.name}`;

        address.textContent = `${member.address}`;

        logo.setAttribute('src', member.imageurl);
        logo.setAttribute('alt', `The logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');
        logo.setAttribute('height', '100');

        email.innerHTML = `<b>Email:</b> ${member.email}`;
        phone.innerHTML = `<b>Phone:</b> ${member.phone}`;

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
        card.appendChild(level);

        card.setAttribute('class', 'card');

        spotlightCards.appendChild(card);
    });
};