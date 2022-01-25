var number1=Math.floor(Math.random()*6) + 1 ;
var number2=Math.floor(Math.random()*6) + 1 ;
console.log(number1,number2);
var imgname1='images/dice'+number1+'.png';
var imgname2='images/dice'+number2+'.png';

console.log(imgname2,imgname1);
document.querySelector(".img2").setAttribute("src",imgname2);
document.querySelector(".img1").setAttribute("src",imgname1);
if (number2>number1) {
    document.querySelector("h1").innerText="Player 2 Wins 👑";
} else if (number2==number1){
    document.querySelector("h1").innerText="Draw";
}
else{
    document.querySelector("h1").innerText="Player 1 Wins 👑";
}
