//ara butonuna tıklandığında çalan telefon çıksın,zil çalsın
let resim =document.querySelector(".resim"); //resim e ulaştım
let ring =document.querySelector(".ses"); //audio ya ulaştım 
//ara butonuna ulaştım
document.querySelector(".on").onclick=function(){ 
resim.src="./img/img.gif";//resim değiştirdim
ring.play(); //sesi çalıştırdım play yaptım
​
}

//baglat butonuna basınca gif gelsin ve ses kesilsin

document.querySelector(".off").onclick=function(){
    resim.src="./img/telbağla.gif";
    ring.pause();
}