let menu = document.querySelector(".menu");
let nav = document.querySelector(".nav");
let close = document.querySelector(".nav .close")

menu.onclick = function () {
    nav.classList.toggle("active")
}

close.onclick = function () {
    nav.classList.toggle("active")
}
































// Create Select of Hours
let selectHour = document.createElement("select");
selectHour.classList.add("hour");

// Create span of hours
let spanHour = document.createElement("span");
spanHour.appendChild(document.createTextNode("Hours: "));
spanHour.classList.add("span-hour");

// Create the container of hours
let hourContainer = document.createElement("div");
hourContainer.classList.add("hour-container");

// create the option of select hours
for(let i = 1 ; i <= 12 ; i++) {
    let hourOption = document.createElement("option");
    hourOption.appendChild(document.createTextNode(i));
    selectHour.appendChild(hourOption);
}

// Append span of hours inside the container
hourContainer.appendChild(spanHour);
// Append the select of hours container
hourContainer.appendChild(selectHour)
// Append the container of hours in the page
document.body.appendChild(hourContainer);

if(window.localStorage.getItem("hours")) {
    selectHour.value = window.localStorage.getItem("hours");

}

selectHour.addEventListener("click", (e) => {
    window.localStorage.setItem("hours", e.currentTarget.value);
    Compare();

})

// Create Select of Minutes
let selectMinute = document.createElement("select");
selectMinute.classList.add("minute");

// Create span of minutes
let spanMinute = document.createElement("span");
spanMinute.appendChild(document.createTextNode("Minuts: "));
spanMinute.classList.add("span-minute");

// Create the container of minutes
let minuteContainer = document.createElement("div");
minuteContainer.classList.add("minute-container");


// create the option of select minutes
for(let i = 0 ; i <= 59 ; i++) {
    let minuteOption = document.createElement("option");

    if(i <10) {

        minuteOption.appendChild(document.createTextNode("0" + i));

    } else {

        minuteOption.appendChild(document.createTextNode(i));

    }
    selectMinute.appendChild(minuteOption);
}

// Append span of minutes inside the container
minuteContainer.appendChild(spanMinute);
// Append the select of minutes container
minuteContainer.appendChild(selectMinute)
// Append the container of minutes in the page
document.body.appendChild(minuteContainer);


if(window.localStorage.getItem("minutes")) {
    selectMinute.value = window.localStorage.getItem("minutes");

}

selectMinute.addEventListener("click", (e) => {
    window.localStorage.setItem("minutes", e.currentTarget.value);
    Compare();

})


let alarm = document.querySelector(".alarm")
let btn = document.querySelector("button");

// Compare

function Compare() {
    let count = setInterval(() => {
        let day = new Date();
    
        let h =  day.getHours() - 12;
        let m = day.getMinutes();
    
        if(selectHour.value == h && selectMinute.value == m) {
            btn.style.opacity = '1';
            alarm.play();
    
            btn.addEventListener("click", () => {
                btn.style.opacity = '0';
                alarm.pause(0);
                clearInterval(count);
    
            })
        } else {
            btn.style.opacity = '0';
            alarm.pause(0)
        }
    })
}

// Compare();



let mode = document.querySelector(".mode");

if(window.localStorage.getItem("mode")) {
    if(window.localStorage.getItem("mode") == "Dark") {

        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
    }
    if(window.localStorage.getItem("mode") == "Light") {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
    }

    mode.innerHTML = window.localStorage.getItem("mode");
}

mode.onclick = () => {

    if(mode.innerHTML == "Dark") {

        mode.innerHTML = "Light";
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");



    } else {
        mode.innerHTML = "Dark";
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");


    }

    window.localStorage.setItem("mode", mode.innerHTML);

}











let background = document.querySelector(".back");
let color = document.querySelector(".color");


// Background
if(window.localStorage.getItem("background")) {
    selectHour.style.backgroundColor = `${window.localStorage.getItem("background")}`;

    selectMinute.style.backgroundColor = `${window.localStorage.getItem("background")}`;

    btn.style.backgroundColor = `${window.localStorage.getItem("background")}`;

    background.value = window.localStorage.getItem("background");
}

background.oninput = () => {
    window.localStorage.setItem("background", background.value)
}

// Color
if(window.localStorage.getItem("color")) {
    selectHour.style.color = `${window.localStorage.getItem("color")}`;

    selectMinute.style.color = `${window.localStorage.getItem("color")}`;

    btn.style.color = `${window.localStorage.getItem("color")}`;
    
    color.value = window.localStorage.getItem("color");
}

color.oninput = () => {
    window.localStorage.setItem("color", color.value)
}
