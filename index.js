var reasons=["Sailash Prakash","Nithish Prakash","Aadhish Prakash", "Ranjeeta Rajendran"];
var images=["C:\Users\saila\Downloads\IMG_7339.jpg","C:\Users\saila\Downloads\IMG_6516.jpg", "C:\Users\saila\Downloads\IMG_3804.jpg""C:\Users\saila\Downloads\IMG_7474.jpg", "C:\Users\saila\Downloads\c5432002-85d7-4694-b1cd-20ce0f00c5d8.jpg"];
var i=0;
function nextslide()document.getElementById("reasons").innerHTML=reasons[i];
document.getElementById("album").src = images[i]; i++;()