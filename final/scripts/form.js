import { formSectionsDisplay } from "./form-module.js";

const reasonDropDown = document.querySelector("select");

const commissionField = document.querySelector("#commission-details");
const questionField = document.querySelector("#question-details");
const problemField = document.querySelector("#problem-details");
const otherField = document.querySelector("#other-details");

const subButton = document.querySelector("#subButton")

const response = document.querySelector("#thanks-response");
const name = document.querySelector("#name");
const reason = document.querySelector("#msgReason");
const email = document.querySelector("#email");
const alt = document.querySelector("#alt");
const reasonTitle = document.querySelector("#reasonTitle");


const params = new URLSearchParams(window.location.search);
const rName = `${params.get('name')}`;
const rReason = `${params.get('reason')}`;
const rEmail = `${params.get('email')}`;
const rAlt = `${params.get('alt-contact')}`;
let rReasonTitle = null;




if(reasonDropDown != null){
    formSectionsDisplay(reasonDropDown, commissionField, problemField, questionField, otherField, subButton);
}

function personalThankYou(){
    name.innerHTML = rName;
    reason.innerHTML = rReason;
    email.innerHTML = rEmail;
    alt.innerHTML = rAlt;
    if(rReason == "commission"){
        rReasonTitle = `${params.get('cType')} commission`;
    }else if( rReason == "problem"){
        rReasonTitle = `${params.get('pTitle')}`;
    }else if(rReason == "question"){
        rReasonTitle = `${params.get('qTitle')}`;
    }else if(rReason == "other"){
        rReasonTitle = `${params.get('oTitle')}`;
    }
    reasonTitle.innerHTML = rReasonTitle;
}

if(response != null){
    personalThankYou();
}