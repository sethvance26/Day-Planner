var timeDisplayEl = $('#time-display');
var saveBtn = document.getElementById('btn');



function displayTime() {
    var rightNow = moment().format('MMMM DD, YYYY [|] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }
  setInterval(displayTime, 1000);





$(".time-block").each(function() {

var hour = parseInt($(this).data().number);

var currentTime = parseInt(moment().format("HH"))

    if(currentTime > hour){
        $(this).addClass("past");
    }  else if (currentTime < hour){
        $(this).addClass("future");
    } else {
        $(this).addClass("present");
    }
    console.log(this);
});



//////////////////////

function writeNotes() {
    console.log('Please');
    var inputField = localStorage.getItem("inputField");
    var hello = $(hello);
    if (!inputField) {
        return;
    }

hello.textContent= inputField.value;

}
 let userNotes = localStorage.getItem("inputField");
 console.log(inputField);

$('.saveBtn').on("click", function () {
    console.log($(this).siblings(".description")[0].value);
    var userNotes = $(this).siblings(".form-control").val();
});

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

