let hrs=document.getElementById("hrs");
let min=document.getElementById("min");
let sec=document.getElementById("sec");
setInterval(() => {

 let currentTime=new Date();
hrs.innerHTML=currentTime.getHours();
min.innerHTML=currentTime.getMinutes();
sec.innerHTML=currentTime.getSeconds();

}, 1000);
let currentTime=new Date();
hrs.innerHTML=currentTime.getHours();
min.innerHTML=currentTime.getMinutes();
sec.innerHTML=currentTime.getSeconds();
