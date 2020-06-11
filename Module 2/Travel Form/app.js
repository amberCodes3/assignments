const form = document.myForm;
const submit = document.getElementById("submit");

function pageAlert(){
    
    let firstName = document.getElementById("firstName").value;
    console.log(firstName);
    
    let lastName = document.getElementById("lastName").value;
    console.log(lastName);

    let age = document.getElementById("age").value;
    console.log(age);

    let gender = form.gender.value;
    console.log(gender);

    let location = form.location.value;
    console.log(location); 

    var diet = [];
    for ( var i = 0; i < form.diet.length; i++){
        if (form.diet[i].checked) {
            diet.push(form.diet[i].value)
        }
     }
     console.log(diet);

    alert(`
    First Name: ${firstName} 
    Last Name: ${lastName} 
    Age: ${age} 
    Gender: ${gender} 
    Location: ${location} 
    Dietary Options: ${diet}`);
};

submit.addEventListener("click", pageAlert)