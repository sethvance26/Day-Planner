var timeDisplayEl = $('#time-display');
var saveBtn = document.getElementById('btn');
var userTextInput = document.querySelector("#inputField");
// Above we declared variables for our save button, user input, and the display of the time.


// This function below displays the time by using moment and declaring what time format we'd like to see on the page.
function displayTime() {
    var rightNow = moment().format('MMMM DD, YYYY [|] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }
  setInterval(displayTime, 1000);
  renderMessage();
// The line above is calling the renderMessage function and setting the interval so that the clock counts by seconds.


$(".time-block").each(function() {

var hour = parseInt($(this).data().number);

var currentTime = parseInt(moment().format("HH"))
// This conditional statement is adding a class of past, present, or future depending on the current time.
    if(currentTime > hour){
        $(this).addClass("past");
    }  else if (currentTime < hour){
        $(this).addClass("future");
    } else {
        $(this).addClass("present");
    }
    console.log(this);
});

//////////////////////////////////////// I put this here to remember where exactly I was working on local storage. (Below)



function renderMessage() {
    console.log('testing')
    var userInput = localStorage.getItem("inputField")

    userTextInput.textContent = userInput;
}
// This function above is getting the user's input from local storage. (getItem)






// This function is adding an event listener to the save button, and saving user's input to the local storage. (setItem)
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
    
    }
    console.log('working!');
});

// We console logged quite a lot to check each thing.