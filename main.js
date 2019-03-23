let startButton = document.getElementById('startSort');
let sortButton = document.getElementById('sortStudent');
let inputName = document.getElementById('inputName');
let form = document.getElementById('studentInfo');

//Student Array
let students = [];

startButton.addEventListener("click", showHideForm);
// Show or Hide the form
function showHideForm(){
    if(form.className === "hide"){
        form.classList.remove("hide");
    } else {
        form.classList.add("hide");
    }
}

// Add student to array
function getStudent() {
    let studentName = inputName.value;
    let newStudent = {name: studentName, house:randomizer()};
    students.push(newStudent );

    domStringBuilder(students);

}

sortButton.addEventListener('click', getStudent)


//remove last added student from the array
function expelStudent() {
    let studentName = inputName.value;
    students.pop(studentName);

}

// Create random function to select student's house
function randomizer() {
    let studentHouse = "";
    hatResults = Math.floor(Math.random() * 3);
    if(hatResults === 0){
        studentHouse = 'Gryffindor';
    } else if(hatResults === 1) {
        studentHouse = 'Hufflepuff';
    } else if (hatResults === 2) {
        studentHouse = 'Ravenclaw';
    } else {
        studentHouse = 'Slytherin';
    }
    return studentHouse;
}

// Print to dom
const printToDom = (divId, textToPrint) => {
    let selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

// Build domStringBuilder
const domStringBuilder = (students) => {
    let domString = "";
    for(let i = 0; i < students.length; i++) {
        
        
        domString += `<div class="card">`
        // domString += `<div class="col-sm-4">`
        domString +=            `<div class="title"><h3>${students[i].name}</h3></div>`;
        domString +=            `<div class="title"><h3>${students[i].house}</h3></div>`;
        domString +=            `<div class="expel-button"><button id = "expel">Expel</button>`;
        domString += `</div>`;
        domString += `</div>`;

    
    }
    printToDom("card-group", domString);
}

const init = () => {
    domStringBuilder(students);
}

init();
// startButton.addEventListener('click', showHideForm);