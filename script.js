window.onload = function(){

    document.getElementById("loader").style.display = "none";

}
window.onload = function () {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }
};

function sendWhatsApp(){

let name=document.getElementById("name").value;
let phone=document.getElementById("phone").value;
let date=document.getElementById("date").value;
let time=document.getElementById("time").value;
let service=document.getElementById("service").value;
let message=document.getElementById("message").value;

let text =
"🧵 *Liberty Tailors & Drapers Appointment*%0A%0A"+
"👤 Name: "+name+"%0A"+
"📱 Mobile: "+phone+"%0A"+
"📅 Date: "+date+"%0A"+
"🕒 Time: "+time+"%0A"+
"✂️ Service: "+service+"%0A"+
"📝 Notes: "+message;

window.open("https://wa.me/919350887292?text="+text,"_blank");

}