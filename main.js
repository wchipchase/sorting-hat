let startButton = document.getElementById('startSort');
let sortButton = document.getElementById('sortStudent');
let inputName = document.getElementById('inputName');
let form = document.getElementById('studentInfo');

let students = [
    {name: 'Bob Barker'},
    {name: 'Pat Sajak'},
    {name: 'Kevin Costner'},
    {name: 'Eric Cartman'},
    {name: 'Mike Fox'}

]

function showHideForm(){
    if(form.style.display === "none"){
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
}

const printToDom = (divId, textToPrint) => {
    let selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const domStringBuilder = (students) => {
    let domString = "";
    for(let i = 0; i < students.length; i++) {
        
        domString += `<div class="col-sm-4">`;
        domString +=    `<div class="card">`
        domString +=            `<div class="title"><h3>${students[i].name}</h3></div>`;
        domString +=            `<div class="expel-button"><button id = "expel">Expel</button>`;
        domString += `</div>`;
        domString += `</div>`;

    
    }
    printToDom("card-group", domString);
}

// startButton.addEventListener('click', showHideForm);