const currentDate = new Date(); 

const current_time = currentDate.toLocaleDateString("en-US", {
    year: "numeric", 
    month: "short", 
    day: "numeric", 
    hour: "numeric", 
    minute:"numeric", 
    hour12: true
}) 

document.getElementById("currentyear").innerHTML = current_time;