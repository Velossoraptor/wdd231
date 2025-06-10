export function formSectionsDisplay(dropDown, cField, pField, qField, oField, button){
    dropDown.addEventListener("change", (e)=>{
        const selection = e.target.value;
        if(selection == "commission"){
            cField.style.display = "block";
            pField.style.display = "none";
            qField.style.display = "none";
            oField.style.display = "none";
            button.style.display = "block";
        }else if(selection == "question"){
            cField.style.display = "none";
            pField.style.display = "none";
            qField.style.display = "block";
            oField.style.display = "none";
            button.style.display = "block";
        }else if(selection == "problem"){
            cField.style.display = "none";
            pField.style.display = "block";
            qField.style.display = "none";
            oField.style.display = "none";
            button.style.display = "block";
        }else if(selection == "other"){
            cField.style.display = "none";
            pField.style.display = "none";
            qField.style.display = "none";
            oField.style.display = "block";
            button.style.display = "block";
        }
    });
}