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

const npModal = document.querySelector("#np");
const brModal = document.querySelector("#br");
const siModal = document.querySelector("#si");
const goModal = document.querySelector("#go");
const buttonNp = document.querySelector("#learn-more-np");
const buttonBr = document.querySelector("#learn-more-br");
const buttonSi = document.querySelector("#learn-more-si");
const buttonGo = document.querySelector("#learn-more-go");

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

buttonNp.addEventListener("click", () =>{
    npModal.showModal();
    npModal.addEventListener("click", (event) => {
        if(event.target==npModal){
            npModal.close();
        }
    });
});
buttonBr.addEventListener("click", () =>{
    brModal.showModal();
    brModal.addEventListener("click", (event) => {
        if(event.target==brModal){
            brModal.close();
        }
    });
});
buttonSi.addEventListener("click", () =>{
    siModal.showModal();
    siModal.addEventListener("click", (event) => {
        if(event.target==siModal){
            siModal.close();
        }
    });
});
buttonGo.addEventListener("click", () =>{
    goModal.showModal();
    goModal.addEventListener("click", (event) => {
        if(event.target==goModal){
            goModal.close();
        }
    });
});
