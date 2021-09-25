//================================================================ =====
//                   GETELEMENTBYID
​
const paragraf = document.getElementById("para").style;
paragraf.backgroundColor = "black";
paragraf.color = "white";
paragraf.fontSize = "20px";
​
​
const buton=document.getElementById("btn");
buton.style.width="100px";
buton.style.color="red";
buton.style.fontSize="18px";
buton.textContent="ARA"; //textContent=tag lerin içeriğindeki yazıyı değiştirmek istersek
​
​
//***** GETELEMENTBYTAGNAME */
​
const resim=document.getElementsByTagName("img");
​
resim[0].style.width="300px";
resim[0].style.height="300px";
resim[1].style.border="3px solid red";
​
//*****GETELEMENTBYCLASSNAME */
​
​
const baslık=document.getElementsByClassName("h1");
​
baslık[0].style.textAlign="center";

//==========QUERYSELECTOR===========

//! ençok kullanılan çağırma yolu

document.querySelector(".title").
document.querySelector(".arama").textContent="DOM SELECTOR KAVRAMI😄";
document.querySelector("#govde").style.backgroundImage="linear-gradient(green, blue, pink)";


//*************EVENT********************

