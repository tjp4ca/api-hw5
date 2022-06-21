var myDate = $(".time-block")

document.querySelector(".time-block").textContent = new Date();
    console.log(document.querySelector(".time-block").textContent);



// when save button is clicked
var save = document.querySelector("#amBtn");
save.addEventListener("click", saveEvent)

function saveEvent() {
    var textData = document.querySelector("#amText");
    // document.getElementById("amText").value;

    localStorage.setItem("event", "value");
    localStorage.getItem("value");
    textData.append();
    console.log("clicked")
}

// click event

// inside click event
    //document.getElementById("textareaID").value


    // localStorage.setItem('event', 'coding')
    // console.log(localStorage.getItem('event'))
    // localStorage.removeItem('event') -- to remove

    // saveData = document.querySelector("#id or .class");
    // function functionName() {

    // }
    // saveData.addEventListener("click", function() {
        
    //     functionName();
    // })



// var saveButton = document.querySelector(".className");
// saveButton.addEventListener("click", function(event) {
//     event.preventDefault();

//     var data = {

//     }

//     localStorage.setItem("data", JSON.stringify(data));
// });