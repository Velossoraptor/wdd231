const timestamp = document.querySelector("#timestamp");
const fullName = document.querySelector("#name");
const organization = document.querySelector("#organization");
const date = document.querySelector("#date");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");

const params = new URLSearchParams(window.location.search);
const fname = `${params.get('fname')} ${params.get('lname')}`;
const orgName = `${params.get('organization')}`;
const subDate = `${params.get('timestamp')}`;
const subEmail = `${params.get('email')}`;
const subPhone = `${params.get('phone')}`;

if(timestamp != null){
    timestamp.value = Date();
    console.log(timestamp);
}


function personalThankYou(){
    fullName.innerHTML = fname;
    organization.innerHTML = orgName;
    date.innerHTML = subDate;
    email.innerHTML = subEmail;
    phone.innerHTML = subPhone;
}

if(params != `null` && fname != `null null`){
    personalThankYou();
}
