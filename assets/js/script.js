var myDate = $(".time-block")
document.querySelector(".time-block").textContent = moment().format("MMMM Do, YYYY - hh:mm:ss a");


var rightNow = moment().format("HH");
console.log(rightNow);

var futureHour = moment().add(1, "hour").format("dddd, MM-D-YYYY [at] hh:mm:ss A");
console.log(futureHour);

var pastHour = moment().subtract(1, "hour").format("dddd, MM-D-YYYY [at] hh:mm:ss A");
console.log(pastHour);

    // convert to moment object at 5:00pm
    // example var time = moment(date, "L").set("hour", 17);

// Current Time
rightNow = parseInt(rightNow)
console.log(rightNow);

// 9am
if (rightNow > 9) {
    document.getElementById("nineTextBox").classList.add("past");
} else if (rightNow < 9) {
    document.getElementById("nineTextBox").classList.add("future");
} else { 
    document.getElementById("nineTextBox").classList.add("present");
}

// 10am
if (rightNow > 10) {
    document.getElementById("tenTextBox").classList.add("past");
} else if (rightNow < 10) {
    document.getElementById("tenTextBox").classList.add("future");
} else { 
    document.getElementById("tenTextBox").classList.add("present");
}

// 11am
if (rightNow > 11) {
    document.getElementById("elevenTextBox").classList.add("past");
} else if (rightNow < 11) {
    document.getElementById("elevenTextBox").classList.add("future");
} else { 
    document.getElementById("elevenTextBox").classList.add("present");
}

// 12pm
if (rightNow > 12) {
    document.getElementById("twelveTextBox").classList.add("past");
} else if (rightNow < 12) {
    document.getElementById("twelveTextBox").classList.add("future");
} else { 
    document.getElementById("twelveTextBox").classList.add("present");
}

// 13pm
if (rightNow > 13) {
    document.getElementById("oneTextBox").classList.add("past");
} else if (rightNow < 13) {
    document.getElementById("oneTextBox").classList.add("future");
} else { 
    document.getElementById("oneTextBox").classList.add("present");
}

// 14pm
if (rightNow > 14) {
    document.getElementById("twoTextBox").classList.add("past");
} else if (rightNow < 14) {
    document.getElementById("twoTextBox").classList.add("future");
} else { 
    document.getElementById("twoTextBox").classList.add("present");
}

// 15pm
if (rightNow > 15) {
    document.getElementById("threeTextBox").classList.add("past");
} else if (rightNow < 15) {
    document.getElementById("threeTextBox").classList.add("future");
} else { 
    document.getElementById("threeTextBox").classList.add("present");
}

// 16pm
if (rightNow > 16) {
    document.getElementById("fourTextBox").classList.add("past");
} else if (rightNow < 16) {
    document.getElementById("fourTextBox").classList.add("future");
} else { 
    document.getElementById("fourTextBox").classList.add("present");
}

// 17pm
if (rightNow > 17) {
    document.getElementById("fiveTextBox").classList.add("past");
} else if (rightNow < 17) {
    document.getElementById("fiveTextBox").classList.add("future");
} else { 
    document.getElementById("fiveTextBox").classList.add("present");
}


// 9am save button
var save9 = document.querySelector(".nineBtn");
save9.addEventListener("click", save9Event)

function save9Event(event) {
    textValue = document.getElementById("nineTextBox").value;
    console.log(textValue);

    localStorage.setItem("nineTextValue", textValue);

    // console.log(event.target.id)
    console.log("clicked")
}
document.getElementById("nineTextBox").textContent = localStorage.getItem("nineTextValue")


// 10am save button
var save10 = document.querySelector(".tenBtn");
save10.addEventListener("click", save10Event)

function save10Event(event) {
    textValue = document.getElementById("tenTextBox").value;
    console.log(textValue);

    localStorage.setItem("tenTextValue", textValue);

    console.log("clicked")
}
document.getElementById("tenTextBox").textContent = localStorage.getItem("tenTextValue")


// 11am save button
var save11 = document.querySelector(".elevenBtn");
save11.addEventListener("click", save11Event)

function save11Event(event) {
    textValue = document.getElementById("elevenTextBox").value;
    console.log(textValue);

    localStorage.setItem("elevenTextValue", textValue);

    console.log("clicked")
}
document.getElementById("elevenTextBox").textContent = localStorage.getItem("elevenTextValue")


// 12pm save button
var save12 = document.querySelector(".twelveBtn");
save12.addEventListener("click", save12Event)

function save12Event() {
    textValue = document.getElementById("twelveTextBox").value;
    console.log(textValue);

    localStorage.setItem("twelveTextValue", textValue);

    console.log("clicked");
}
document.getElementById("twelveTextBox").textContent = localStorage.getItem("twelveTextValue")


// 1pm save button
var save1 = document.querySelector(".oneBtn");
save1.addEventListener("click", save1Event)

function save1Event() {
    textValue = document.getElementById("oneTextBox").value;
    console.log(textValue);

    localStorage.setItem("oneTextValue", textValue);

    console.log("clicked");
}
document.getElementById("oneTextBox").textContent = localStorage.getItem("oneTextValue")


// 2pm save button
var save2 = document.querySelector(".twoBtn");
save2.addEventListener("click", save2Event)

function save2Event() {
    textValue = document.getElementById("twoTextBox").value;
    console.log(textValue);

    localStorage.setItem("twoTextValue", textValue);

    console.log("clicked");
}
document.getElementById("twoTextBox").textContent = localStorage.getItem("twoTextValue")


// 3pm save button
var save3 = document.querySelector(".threeBtn");
save3.addEventListener("click", save3Event)

function save3Event() {
    textValue = document.getElementById("threeTextBox").value;
    console.log(textValue);

    localStorage.setItem("threeTextValue", textValue);

    console.log("clicked");
}
document.getElementById("threeTextBox").textContent = localStorage.getItem("threeTextValue")


// 4pm save button
var save4 = document.querySelector(".fourBtn");
save4.addEventListener("click", save4Event)

function save4Event() {
    textValue = document.getElementById("fourTextBox").value;
    console.log(textValue);

    localStorage.setItem("fourTextValue", textValue);

    console.log("clicked");
}
document.getElementById("fourTextBox").textContent = localStorage.getItem("fourTextValue")


// 5pm save button
var save5 = document.querySelector(".fiveBtn");
save5.addEventListener("click", save5Event)

function save5Event() {
    textValue = document.getElementById("fiveTextBox").value;
    console.log(textValue);

    localStorage.setItem("fiveTextValue", textValue);

    console.log("clicked");
}
document.getElementById("fiveTextBox").textContent = localStorage.getItem("fiveTextValue")











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