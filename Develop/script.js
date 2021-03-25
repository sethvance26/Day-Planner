var timeDisplayEl = $('#time-display');
const saveBtn = document.getElementById('btn');



function displayTime() {
    var rightNow = moment().format('MMMM DD, YYYY [|] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }
  setInterval(displayTime, 1000);

function renderInputs() {
    var inputField = localStorage.getElementById('inputField');
    if (!inputField) {
        return;
    }

    inputField.textContent = inputField;

}

saveBtn.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('hello');
    var inputField = document.getElementById('inputField').value;
    console.log(inputField);

    if (inputField === "") {
        console.log("error");
    } else {
        console.log("success");

    
    localStorage.setItem("inputField", inputField);

    renderInputs();
    }
});