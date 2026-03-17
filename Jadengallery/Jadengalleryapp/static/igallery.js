const images = [
{src:"J1.jpeg", text:"John Mayer Trio"},
{src:"J2.jpeg", text:"Backstage"},
{src:"J3.jpeg", text:"Heart of life hollywood"},
{src:"J4.jpeg", text:"Everyday I have the blues"},
{src:"J5.jpeg", text:"Stop This Train"},
{src:"J6.jpeg", text:"Neon"}
];

let current = 0;

function showImage(){
document.getElementById("photo").src = images[current].src;
document.getElementById("text").innerHTML = images[current].text;
}

function next(){
current++;
if(current >= images.length){
current = 0;
}
showImage();
}

function previous(){
current--;
if(current < 0){
current = images.length - 1;
}
showImage();
}

showImage();